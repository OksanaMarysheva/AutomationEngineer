import ObjectProjection from "./ObjectProjection";

test('ObjectProjection works with null', () => {
    const src = {
        prop11: {
            prop21: 21,
            prop22: {
                prop31: 31,
                prop32: 32
            }
        },
        prop12: 12
    }
    const proto = {
        prop11: {
            prop22: null
        }
    }
    const res = {
        prop11: {
            prop22: {
                prop31: 31,
                prop32: 32
            }
        }
    }

    const result = ObjectProjection(src, proto)

    expect(result).toEqual(res)
});

test('ObjectProjection works with depth task', () => {
    const src = {
        prop1: {
            prop11: {
                prop111: "some value"
            }
        },
        prop2: {
            prop21: {
                prop221: "some value"
            }
        },
        prop3: {
            prop31: {
                prop311: "some value"
            }
        }
    }
    const proto = {
        prop1: "some value",
        prop2: {
            prop21: {
                prop221: "some value"
            }
        },
        prop3: {
            prop31: {
                prop311: {
                    prop4111: "some value"
                }
            }
        }
    }
    const res = {
        prop1: "some value",
        prop2: {
            prop21: {
                prop221: "some value"
            }
        },
    }

    const result = ObjectProjection(src, proto)

    expect(result).toEqual(res)
});

test('ObjectProjection works with {}', () => {
    const src = {
        prop11: {
            prop21: 21,
            prop22: {
                prop31: 31,
                prop32: 32
            }
        },
        prop12: 12
    }
    const proto = {
        prop11: {
            prop22: {}
        }
    }
    const res = {
        prop11: {
            prop22: {
                prop31: 31,
                prop32: 32
            }
        }
    }

    const result = ObjectProjection(src, proto)

    expect(result).toEqual(res)
});
