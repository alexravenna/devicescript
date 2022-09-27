#pragma once
#include <stdint.h>
#include <stdbool.h>

typedef union {
    double _f;
    uint64_t u64;
    struct {
        uint32_t mantisa32;
        uint32_t mantisa20 : 20;
        uint32_t exponent : 11;
        uint32_t sign : 1;
    };
    struct {
        int32_t val_int32;
        uint32_t exp_sign;
    };
} value_t;

#define JACS_INT_TAG (0U - 1U)
#define JACS_NAN_TAG 0x7ff80000
#define JACS_HANDLE_TAG 0x7ff00000

static inline bool jacs_is_tagged_int(value_t t) {
    return (t.exp_sign + 1) == 0;
}

static inline bool jacs_is_nan(value_t t) {
    return t.exp_sign == JACS_NAN_TAG;
}

static inline bool jacs_is_handle(value_t t) {
    return (t.exp_sign >> (20 - 1)) == (0x7ff << 1);
}

// handle type is 20 bit
static inline int jacs_handle_type(value_t t) {
    return jacs_is_handle(t) ? (t.exp_sign << 12) >> 12 : 0;
}

static inline uint32_t jacs_handle_value(value_t t) {
    return t.mantisa32;
}

static inline void *jacs_handle_ptr_value(value_t t) {
#if JD_64
    extern uintptr_t jacs_base_handle_ptr;
    return (void *)(jacs_base_handle_ptr + t.mantisa32);
#else
    return (void *)t.mantisa32;
#endif
}

static inline value_t jacs_value_from_handle(int type, uint32_t value) {
    value_t r;
    r.exp_sign = JACS_HANDLE_TAG + type;
    r.mantisa32 = value;
    return r;
}


#define JACS_HANDLE_IS_GC_POINTER_MASK 0x80
#define JACS_HANDLE_IS_HEAP_POINTER_MASK 0x40

#define JACS_HANDLE_TYPE_FIBER 0x01
#define JACS_HANDLE_TYPE_OBJECT 0x81

value_t jacs_value_from_double(double v);
value_t jacs_value_from_int(int v);
value_t jacs_value_from_bool(int v);
value_t jacs_value_from_pointer(int type, void *ptr);

int32_t jacs_value_to_int(value_t v);
double jacs_value_to_double(value_t v);
int jacs_value_to_bool(value_t v);

extern const value_t jacs_zero;
extern const value_t jacs_one;
extern const value_t jacs_nan;
extern const value_t jacs_int_min;
extern const value_t jacs_max_int_1;
