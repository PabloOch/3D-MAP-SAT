// Satellite.js
! function(t, o) {
    "function" == typeof define && define.amd ? define([], o) : t.satellite = o()
}(this, function() {
    var t, o, s;
    return function(e) {
        function n(t, o) {
            return v.call(t, o)
        }

        function i(t, o) {
            var s, e, n, i, a, r, d, c, h, m, p, l = o && o.split("/"),
                u = M.map,
                f = u && u["*"] || {};
            if (t && "." === t.charAt(0))
                if (o) {
                    for (l = l.slice(0, l.length - 1), t = t.split("/"), a = t.length - 1, M.nodeIdCompat && w.test(t[a]) && (t[a] = t[a].replace(w, "")), t = l.concat(t), h = 0; h < t.length; h += 1)
                        if (p = t[h], "." === p) t.splice(h, 1), h -= 1;
                        else if (".." === p) {
                        if (1 === h && (".." === t[2] || ".." === t[0])) break;
                        h > 0 && (t.splice(h - 1, 2), h -= 2)
                    }
                    t = t.join("/")
                } else 0 === t.indexOf("./") && (t = t.substring(2));
            if ((l || f) && u) {
                for (s = t.split("/"), h = s.length; h > 0; h -= 1) {
                    if (e = s.slice(0, h).join("/"), l)
                        for (m = l.length; m > 0; m -= 1)
                            if (n = u[l.slice(0, m).join("/")], n && (n = n[e])) {
                                i = n, r = h;
                                break
                            }
                    if (i) break;
                    !d && f && f[e] && (d = f[e], c = h)
                }!i && d && (i = d, r = c), i && (s.splice(0, r, i), t = s.join("/"))
            }
            return t
        }

        function a(t, o) {
            return function() {
                return l.apply(e, y.call(arguments, 0).concat([t, o]))
            }
        }

        function r(t) {
            return function(o) {
                return i(o, t)
            }
        }

        function d(t) {
            return function(o) {
                g[t] = o
            }
        }

        function c(t) {
            if (n(x, t)) {
                var o = x[t];
                delete x[t], z[t] = !0, p.apply(e, o)
            }
            if (!n(g, t) && !n(z, t)) throw new Error("No " + t);
            return g[t]
        }

        function h(t) {
            var o, s = t ? t.indexOf("!") : -1;
            return s > -1 && (o = t.substring(0, s), t = t.substring(s + 1, t.length)), [o, t]
        }

        function m(t) {
            return function() {
                return M && M.config && M.config[t] || {}
            }
        }
        var p, l, u, f, g = {},
            x = {},
            M = {},
            z = {},
            v = Object.prototype.hasOwnProperty,
            y = [].slice,
            w = /\.js$/;
        u = function(t, o) {
            var s, e = h(t),
                n = e[0];
            return t = e[1], n && (n = i(n, o), s = c(n)), n ? t = s && s.normalize ? s.normalize(t, r(o)) : i(t, o) : (t = i(t, o), e = h(t), n = e[0], t = e[1], n && (s = c(n))), {
                f: n ? n + "!" + t : t,
                n: t,
                pr: n,
                p: s
            }
        }, f = {
            require: function(t) {
                return a(t)
            },
            exports: function(t) {
                var o = g[t];
                return "undefined" != typeof o ? o : g[t] = {}
            },
            module: function(t) {
                return {
                    id: t,
                    uri: "",
                    exports: g[t],
                    config: m(t)
                }
            }
        }, p = function(t, o, s, i) {
            var r, h, m, p, l, M, v = [],
                y = typeof s;
            if (i = i || t, "undefined" === y || "function" === y) {
                for (o = !o.length && s.length ? ["require", "exports", "module"] : o, l = 0; l < o.length; l += 1)
                    if (p = u(o[l], i), h = p.f, "require" === h) v[l] = f.require(t);
                    else if ("exports" === h) v[l] = f.exports(t), M = !0;
                else if ("module" === h) r = v[l] = f.module(t);
                else if (n(g, h) || n(x, h) || n(z, h)) v[l] = c(h);
                else {
                    if (!p.p) throw new Error(t + " missing " + h);
                    p.p.load(p.n, a(i, !0), d(h), {}), v[l] = g[h]
                }
                m = s ? s.apply(g[t], v) : void 0, t && (r && r.exports !== e && r.exports !== g[t] ? g[t] = r.exports : m === e && M || (g[t] = m))
            } else t && (g[t] = s)
        }, t = o = l = function(t, o, s, n, i) {
            if ("string" == typeof t) return f[t] ? f[t](o) : c(u(t, o).f);
            if (!t.splice) {
                if (M = t, M.deps && l(M.deps, M.callback), !o) return;
                o.splice ? (t = o, o = s, s = null) : t = e
            }
            return o = o || function() {}, "function" == typeof s && (s = n, n = i), n ? p(e, t, o, s) : setTimeout(function() {
                p(e, t, o, s)
            }, 4), l
        }, l.config = function(t) {
            return l(t)
        }, t._defined = g, s = function(t, o, s) {
            o.splice || (s = o, o = []), n(g, t) || n(x, t) || (x[t] = [t, o, s])
        }, s.amd = {
            jQuery: !0
        }
    }(), s("almond", function() {}), s("constants", [], function() {
        "use strict";
        var t = Math.PI,
            o = 398600.5,
            s = 6378.137,
            e = 60 / Math.sqrt(s * s * s / o),
            n = .00108262998905,
            i = -253215306e-14;
        return {
            pi: t,
            twoPi: 2 * t,
            deg2rad: t / 180,
            rad2deg: 180 / t,
            minutesPerDay: 1440,
            mu: o,
            earthRadius: s,
            xke: e,
            tumin: 1 / e,
            j2: n,
            j3: i,
            j4: -161098761e-14,
            j3oj2: i / n,
            x2o3: 2 / 3
        }
    }), s("coordinate-transforms/degrees-lat", ["../constants"], function(t) {
        "use strict";
        return function(o) {
            if (o > t.pi / 2 || o < -t.pi / 2) return "Err";
            var s = o / t.pi * 180;
            return s = 0 > s ? s : s
        }
    }), s("coordinate-transforms/degrees-long", ["../constants"], function(t) {
        "use strict";
        return function(o) {
            var s = o / t.pi * 180 % 360;
            return s > 180 ? s = 360 - s : -180 > s && (s = 360 + s), s
        }
    }), s("coordinate-transforms/ecf-to-eci", [], function() {
        "use strict";
        return function(t, o) {
            var s = t.x * Math.cos(o) - t.y * Math.sin(o),
                e = t.x * Math.sin(o) + t.y * Math.cos(o),
                n = t.z;
            return {
                x: s,
                y: e,
                z: n
            }
        }
    }), s("coordinate-transforms/geodetic-to-ecf", [], function() {
        "use strict";
        return function(t) {
            var o = t.longitude,
                s = t.latitude,
                e = t.height,
                n = 6378.137,
                i = 6356.7523142,
                a = (n - i) / n,
                r = 2 * a - a * a,
                d = n / Math.sqrt(1 - r * Math.sin(s) * Math.sin(s)),
                c = (d + e) * Math.cos(s) * Math.cos(o),
                h = (d + e) * Math.cos(s) * Math.sin(o),
                m = (d * (1 - r) + e) * Math.sin(s);
            return {
                x: c,
                y: h,
                z: m
            }
        }
    }), s("coordinate-transforms/topocentric", ["./geodetic-to-ecf"], function(t) {
        "use strict";
        return function(o, s) {
            var e = o.longitude,
                n = o.latitude,
                i = t(o),
                a = s.x - i.x,
                r = s.y - i.y,
                d = s.z - i.z,
                c = Math.sin(n) * Math.cos(e) * a + Math.sin(n) * Math.sin(e) * r - Math.cos(n) * d,
                h = -Math.sin(e) * a + Math.cos(e) * r,
                m = Math.cos(n) * Math.cos(e) * a + Math.cos(n) * Math.sin(e) * r + Math.sin(n) * d;
            return {
                topS: c,
                topE: h,
                topZ: m
            }
        }
    }), s("coordinate-transforms/topocentric-to-look-angles", ["../constants"], function(t) {
        "use strict";
        return function(o) {
            var s = o.topS,
                e = o.topE,
                n = o.topZ,
                i = Math.sqrt(s * s + e * e + n * n),
                a = Math.asin(n / i),
                r = Math.atan2(-e, s) + t.pi;
            return {
                azimuth: r,
                elevation: a,
                rangeSat: i
            }
        }
    }), s("coordinate-transforms/ecf-to-look-angles", ["./topocentric", "./topocentric-to-look-angles"], function(t, o) {
        "use strict";
        return function(s, e) {
            var n = t(s, e);
            return o(n)
        }
    }), s("coordinate-transforms/eci-to-ecf", [], function() {
        "use strict";
        return function(t, o) {
            var s = t.x * Math.cos(o) + t.y * Math.sin(o),
                e = t.x * -Math.sin(o) + t.y * Math.cos(o),
                n = t.z;
            return {
                x: s,
                y: e,
                z: n
            }
        }
    }), s("coordinate-transforms/eci-to-geodetic", [], function() {
        "use strict";
        return function(t, o) {
            for (var s, e = 6378.137, n = 6356.7523142, i = Math.sqrt(t.x * t.x + t.y * t.y), a = (e - n) / e, r = 2 * a - a * a, d = Math.atan2(t.y, t.x) - o, c = 20, h = 0, m = Math.atan2(t.z, Math.sqrt(t.x * t.x + t.y * t.y)); c > h;) s = 1 / Math.sqrt(1 - r * Math.sin(m) * Math.sin(m)), m = Math.atan2(t.z + e * s * r * Math.sin(m), i), h += 1;
            var p = i / Math.cos(m) - e * s;
            return {
                longitude: d,
                latitude: m,
                height: p
            }
        }
    }), s("doppler-factor", [], function() {
        "use strict";
        return function(t, o, s) {
            function e(t) {
                return t >= 0 ? 1 : -1
            }
            var n = Math.sqrt(Math.pow(o.x - t.x, 2) + Math.pow(o.y - t.y, 2) + Math.pow(o.z - t.z, 2)),
                i = {
                    x: o.x + s.x,
                    y: o.y + s.y,
                    z: o.z + s.z
                },
                a = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) + Math.pow(i.z - t.z, 2)),
                r = a - n;
            r *= e(r);
            var d = 299792.458,
                c = 1 + r / d;
            return c
        }
    }), s("gstime/days2mdhms", [], function() {
        "use strict";
        return function(t, o) {
            var s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                e = Math.floor(o);
            t % 4 === 0 && (s = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
            for (var n = 1, i = 0; e > i + s[n - 1] && 12 > n;) i += s[n - 1], n += 1;
            var a = n,
                r = e - i,
                d = 24 * (o - e),
                c = Math.floor(d);
            d = 60 * (d - c);
            var h = Math.floor(d),
                m = 60 * (d - h),
                p = {
                    mon: a,
                    day: r,
                    hr: c,
                    minute: h,
                    sec: m
                };
            return p
        }
    }), s("gstime/gstime", ["../constants"], function(t) {
        "use strict";
        return function(o) {
            var s = (o - 2451545) / 36525,
                e = -62e-7 * s * s * s + .093104 * s * s + 3164400184.812866 * s + 67310.54841;
            return e = e * t.deg2rad / 240 % t.twoPi, 0 > e && (e += t.twoPi), e
        }
    }), s("gstime/jday", [], function() {
        "use strict";
        return function(t, o, s, e, n, i) {
            return 367 * t - Math.floor(7 * (t + Math.floor((o + 9) / 12)) * .25) + Math.floor(275 * o / 9) + s + 1721013.5 + ((i / 60 + n) / 60 + e) / 24
        }
    }), s("dpper", ["./constants"], function(t) {
        "use strict";
        return function(o, s) {
            var e, n, i, a, r, d, c, h, m, p, l, u, f, g, x, M, z, v, y, w, b, j, q, P, k, F, R, E, I, T, O, D = s.init,
                L = s.ep,
                S = s.inclp,
                A = s.nodep,
                Z = s.argpp,
                C = s.mp,
                G = s.opsmode,
                J = o.e3,
                N = o.ee2,
                Q = o.peo,
                $ = o.pgho,
                _ = o.pho,
                B = o.pinco,
                H = o.plo,
                K = o.se2,
                U = o.se3,
                V = o.sgh2,
                W = o.sgh3,
                X = o.sgh4,
                Y = o.sh2,
                to = o.sh3,
                oo = o.si2,
                so = o.si3,
                eo = o.sl2,
                no = o.sl3,
                io = o.sl4,
                ao = o.t,
                ro = o.xgh2,
                co = o.xgh3,
                ho = o.xgh4,
                mo = o.xh2,
                po = o.xh3,
                lo = o.xi2,
                uo = o.xi3,
                fo = o.xl2,
                go = o.xl3,
                xo = o.xl4,
                Mo = o.zmol,
                zo = o.zmos,
                vo = 119459e-10,
                yo = .01675,
                wo = .00015835218,
                bo = .0549;
            T = zo + vo * ao, "y" === D && (T = zo), I = T + 2 * yo * Math.sin(T), q = Math.sin(I), p = .5 * q * q - .25, l = -.5 * q * Math.cos(I), v = K * p + U * l, P = oo * p + so * l, F = eo * p + no * l + io * q, w = V * p + W * l + X * q, b = Y * p + to * l, T = Mo + wo * ao, "y" === D && (T = Mo), I = T + 2 * bo * Math.sin(T), q = Math.sin(I), p = .5 * q * q - .25, l = -.5 * q * Math.cos(I), z = N * p + J * l, j = lo * p + uo * l, k = fo * p + go * l + xo * q, y = ro * p + co * l + ho * q, O = mo * p + po * l, u = v + z, x = P + j, M = F + k, f = w + y, g = b + O, "n" === D && (u -= Q, x -= B, M -= H, f -= $, g -= _, S += x, L += u, a = Math.sin(S), i = Math.cos(S), S >= .2 ? (g /= a, f -= i * g, Z += f, A += g, C += M) : (d = Math.sin(A), r = Math.cos(A), e = a * d, n = a * r, c = g * r + x * i * d, h = -g * d + x * i * r, e += c, n += h, A %= t.twoPi, 0 > A && "a" === G && (A += t.twoPi), R = C + Z + i * A, m = M + f - x * A * a, R += m, E = A, A = Math.atan2(e, n), 0 > A && "a" === G && (A += t.twoPi), Math.abs(E - A) > t.pi && (E > A ? A += t.twoPi : A -= t.twoPi), C += M, Z = R - C - i * A));
            var jo = {
                ep: L,
                inclp: S,
                nodep: A,
                argpp: Z,
                mp: C
            };
            return jo
        }
    }), s("dspace", ["./constants"], function(t) {
        "use strict";
        return function(o) {
            var s, e, n, i, a, r, d, c, h, m, p = o.irez,
                l = o.d2201,
                u = o.d2211,
                f = o.d3210,
                g = o.d3222,
                x = o.d4410,
                M = o.d4422,
                z = o.d5220,
                v = o.d5232,
                y = o.d5421,
                w = o.d5433,
                b = o.dedt,
                j = o.del1,
                q = o.del2,
                P = o.del3,
                k = o.didt,
                F = o.dmdt,
                R = o.dnodt,
                E = o.domdt,
                I = o.argpo,
                T = o.argpdot,
                O = o.t,
                D = o.tc,
                L = o.gsto,
                S = o.xfact,
                A = o.xlamo,
                Z = o.no,
                C = o.atime,
                G = o.em,
                J = o.argpm,
                N = o.inclm,
                Q = o.xli,
                $ = o.mm,
                _ = o.xni,
                B = o.nodem,
                H = o.nm,
                K = .13130908,
                U = 2.8843198,
                V = .37448087,
                W = 5.7686396,
                X = .95240898,
                Y = 1.8014998,
                to = 1.050833,
                oo = 4.4108898,
                so = .0043752690880113,
                eo = 720,
                no = -720,
                io = 259200,
                ao = 0;
            if (n = (L + D * so) % t.twoPi, G += b * O, N += k * O, J += E * O, B += R * O, $ += F * O, e = 0, 0 !== p) {
                (0 === C || 0 >= O * C || Math.abs(O) < Math.abs(C)) && (C = 0, _ = Z, Q = A), s = O > 0 ? eo : no;
                for (var ro = 381, co = 0; 381 === ro;) 2 !== p ? (h = j * Math.sin(Q - K) + q * Math.sin(2 * (Q - U)) + P * Math.sin(3 * (Q - V)), d = _ + S, c = j * Math.cos(Q - K) + 2 * q * Math.cos(2 * (Q - U)) + 3 * P * Math.cos(3 * (Q - V)), c *= d) : (m = I + T * C, a = m + m, i = Q + Q, h = l * Math.sin(a + Q - W) + u * Math.sin(Q - W) + f * Math.sin(m + Q - X) + g * Math.sin(-m + Q - X) + x * Math.sin(a + i - Y) + M * Math.sin(i - Y) + z * Math.sin(m + Q - to) + v * Math.sin(-m + Q - to) + y * Math.sin(m + i - oo) + w * Math.sin(-m + i - oo), d = _ + S, c = l * Math.cos(a + Q - W) + u * Math.cos(Q - W) + f * Math.cos(m + Q - X) + g * Math.cos(-m + Q - X) + z * Math.cos(m + Q - to) + v * Math.cos(-m + Q - to) + 2 * (x * Math.cos(a + i - Y) + M * Math.cos(i - Y) + y * Math.cos(m + i - oo) + w * Math.cos(-m + i - oo)), c *= d), Math.abs(O - C) >= eo ? (co = 0, ro = 381) : (e = O - C, ro = 0), 381 === ro && (Q = Q + d * s + h * io, _ = _ + h * s + c * io, C += s);
                H = _ + h * e + c * e * e * .5, r = Q + d * e + h * e * e * .5, 1 !== p ? ($ = r - 2 * B + 2 * n, ao = H - Z) : ($ = r - B - J + n, ao = H - Z), H = Z + ao
            }
            var ho = {
                atime: C,
                em: G,
                argpm: J,
                inclm: N,
                xli: Q,
                mm: $,
                xni: _,
                nodem: B,
                dndt: ao,
                nm: H
            };
            return ho
        }
    }), s("sgp4", ["./constants", "./dpper", "./dspace"], function(t, o, s) {
        "use strict";
        return function(e, n) {
            var i, a, r, d, c, h, m, p, l, u, f, g, x, M, z, v, y, w, b, j, q, P, k, F, R, E, I, T, O, D, L, S, A, Z, C, G, J, N, Q, $, _, B, H, K, U, V, W, X, Y, to, oo, so, eo, no, io, ao, ro, co, ho, mo, po, lo, uo, fo, go, xo, Mo, zo, vo, yo, wo, bo, jo = 0,
                qo = 1.5e-12,
                Po = t.earthRadius * t.xke / 60;
            e.t = n, e.error = 0, Mo = e.mo + e.mdot * e.t;
            var ko = e.argpo + e.argpdot * e.t;
            if (yo = e.nodeo + e.nodedot * e.t, D = ko, ho = Mo, $ = e.t * e.t, po = yo + e.nodecf * $, X = 1 - e.cc1 * e.t, Y = e.bstar * e.cc4 * e.t, to = e.t2cof * $, 1 !== e.isimp) {
                k = e.omgcof * e.t;
                var Fo = 1 + e.eta * Math.cos(Mo);
                P = e.xmcof * (Fo * Fo * Fo - e.delmo), U = k + P, ho = Mo + U, D = ko - U, _ = $ * e.t, B = _ * e.t, X = X - e.d2 * $ - e.d3 * _ - e.d4 * B, Y += e.bstar * e.cc5 * (Math.sin(ho) - e.sinmao), to = to + e.t3cof * _ + B * (e.t4cof + e.t * e.t5cof)
            }
            mo = e.no;
            var Ro = e.ecco;
            if (co = e.inclo, "d" === e.method) {
                H = e.t;
                var Eo = {
                        irez: e.irez,
                        d2201: e.d2201,
                        d2211: e.d2211,
                        d3210: e.d3210,
                        d3222: e.d3222,
                        d4410: e.d4410,
                        d4422: e.d4422,
                        d5220: e.d5220,
                        d5232: e.d5232,
                        d5421: e.d5421,
                        d5433: e.d5433,
                        dedt: e.dedt,
                        del1: e.del1,
                        del2: e.del2,
                        del3: e.del3,
                        didt: e.didt,
                        dmdt: e.dmdt,
                        dnodt: e.dnodt,
                        domdt: e.domdt,
                        argpo: e.argpo,
                        argpdot: e.argpdot,
                        t: e.t,
                        tc: H,
                        gsto: e.gsto,
                        xfact: e.xfact,
                        xlamo: e.xlamo,
                        no: e.no,
                        atime: e.atime,
                        em: Ro,
                        argpm: D,
                        inclm: co,
                        xli: e.xli,
                        mm: ho,
                        xni: e.xni,
                        nodem: po,
                        nm: mo
                    },
                    Io = s(Eo);
                Ro = Io.em, D = Io.argpm, co = Io.inclm, ho = Io.mm, po = Io.nodem, F = Io.dndt, mo = Io.nm
            }
            if (0 >= mo) return e.error = 2, [!1, !1];
            if (i = Math.pow(t.xke / mo, t.x2o3) * X * X, mo = t.xke / Math.pow(i, 1.5), Ro -= Y, Ro >= 1 || -.001 > Ro) return e.error = 1, [!1, !1];
            1e-6 > Ro && (Ro = 1e-6), ho += e.no * to, go = ho + D + po, R = Ro * Ro, U = 1 - R, po %= t.twoPi, D %= t.twoPi, go %= t.twoPi, ho = (go - D - po) % t.twoPi, h = Math.sin(co), c = Math.cos(co);
            var To = Ro;
            if (uo = co, L = D, bo = po, xo = ho, v = h, z = c, "d" === e.method) {
                var Oo = {
                        inclo: e.inclo,
                        init: "n",
                        ep: To,
                        inclp: uo,
                        nodep: bo,
                        argpp: L,
                        mp: xo,
                        opsmode: e.operationmod
                    },
                    Do = o(e, Oo);
                if (To = Do.ep, uo = Do.inclp, bo = Do.nodep, L = Do.argpp, xo = Do.mp, 0 > uo && (uo = -uo, bo += t.pi, L -= t.pi), 0 > To || To > 1) return e.error = 3, [!1, !1]
            }
            "d" === e.method && (v = Math.sin(uo), z = Math.cos(uo), e.aycof = -.5 * t.j3oj2 * v, e.xlcof = Math.abs(z + 1) > 1.5e-12 ? -.25 * t.j3oj2 * v * (3 + 5 * z) / (1 + z) : -.25 * t.j3oj2 * v * (3 + 5 * z) / qo), a = To * Math.cos(L), U = 1 / (i * (1 - To * To)), r = To * Math.sin(L) + U * e.aycof, fo = xo + L + bo + U * e.xlcof * a, oo = (fo - bo) % t.twoPi, T = oo, K = 9999.9;
            for (var Lo = 1; Math.abs(K) >= 1e-12 && 10 >= Lo;) g = Math.sin(T), f = Math.cos(T), K = 1 - f * a - g * r, K = (oo - r * f + a * g - T) / K, Math.abs(K) >= .95 && (K = K > 0 ? .95 : -.95), T += K, Lo += 1;
            if (E = a * f + r * g, O = a * g - r * f, I = a * a + r * r, S = i * (1 - I), 0 > S) return e.error = 4, [!1, !1];
            G = i * (1 - E), C = Math.sqrt(i) * O / G, N = Math.sqrt(S) / G, d = Math.sqrt(1 - I), U = O / (1 + d), q = i / G * (g - r - a * U), j = i / G * (f - a + r * U), Q = Math.atan2(q, j), u = (j + j) * q, l = 1 - 2 * q * q, U = 1 / S, V = .5 * t.j2 * U, W = V * U, "d" === e.method && (y = z * z, e.con41 = 3 * y - 1, e.x1mth2 = 1 - y, e.x7thm1 = 7 * y - 1), jo = G * (1 - 1.5 * W * d * e.con41) + .5 * V * e.x1mth2 * l, Q -= .25 * W * e.x7thm1 * u, wo = bo + 1.5 * W * z * u, lo = uo + 1.5 * W * z * v * l;
            var So = C - mo * V * e.x1mth2 * u / t.xke;
            return J = N + mo * V * (e.x1mth2 * l + 1.5 * e.con41) / t.xke, b = Math.sin(Q), w = Math.cos(Q), p = Math.sin(wo), m = Math.cos(wo), M = Math.sin(lo), x = Math.cos(lo), zo = -p * x, vo = m * x, so = zo * b + m * w, eo = vo * b + p * w, no = M * b, io = zo * w - m * b, ao = vo * w - p * b, ro = M * w, A = {
                x: 0,
                y: 0,
                z: 0
            }, A.x = jo * so * t.earthRadius, A.y = jo * eo * t.earthRadius, A.z = jo * no * t.earthRadius, Z = {
                x: 0,
                y: 0,
                z: 0
            }, Z.x = (So * so + J * io) * Po, Z.y = (So * eo + J * ao) * Po, Z.z = (So * no + J * ro) * Po, 1 > jo ? (e.error = 6, {
                position: !1,
                velocity: !1
            }) : {
                position: A,
                velocity: Z
            }
        }
    }), s("propagate/propagate", ["../constants", "../gstime/jday", "../sgp4"], function(t, o, s) {
        "use strict";
        return function(e, n, i, a, r, d, c) {
            var h = o(n, i, a, r, d, c),
                m = (h - e.jdsatepoch) * t.minutesPerDay;
            return s(e, m)
        }
    }), s("dscom", ["./constants"], function(t) {
        "use strict";
        return function(o) {
            var s, e, n, i, a, r, d, c, h, m, p, l, u, f, g, x, M, z, v, y, w, b, j, q, P, k, F, R, E, I, T, O, D, L, S, A, Z, C, G, J, N, Q, $, _, B, H, K, U, V, W, X, Y, to, oo, so, eo, no, io, ao, ro, co, ho, mo, po, lo, uo, fo, go, xo, Mo, zo, vo, yo, wo, bo, jo, qo = o.epoch,
                Po = o.ep,
                ko = o.argpp,
                Fo = o.tc,
                Ro = o.inclp,
                Eo = o.nodep,
                Io = o.np,
                To = o.e3,
                Oo = o.ee2,
                Do = o.peo,
                Lo = o.pgho,
                So = o.pho,
                Ao = o.pinco,
                Zo = o.plo,
                Co = o.se2,
                Go = o.se3,
                Jo = o.sgh2,
                No = o.sgh3,
                Qo = o.sgh4,
                $o = o.sh2,
                _o = o.sh3,
                Bo = o.si2,
                Ho = o.si3,
                Ko = o.sl2,
                Uo = o.sl3,
                Vo = o.sl4,
                Wo = o.xgh2,
                Xo = o.xgh3,
                Yo = o.xgh4,
                ts = o.xh2,
                os = o.xh3,
                ss = o.xi2,
                es = o.xi3,
                ns = o.xl2,
                is = o.xl3,
                as = o.xl4,
                rs = o.zmol,
                ds = o.zmos,
                cs = .01675,
                hs = .0549,
                ms = 29864797e-13,
                ps = 4.7968065e-7,
                ls = .39785416,
                us = .91744867,
                fs = .1945905,
                gs = -.98088458,
                xs = Io,
                Ms = Po,
                zs = Math.sin(Eo),
                vs = Math.cos(Eo),
                ys = Math.sin(ko),
                ws = Math.cos(ko),
                bs = Math.sin(Ro),
                js = Math.cos(Ro),
                qs = Ms * Ms;
            p = 1 - qs;
            var Ps = Math.sqrt(p);
            Do = 0, Ao = 0, Zo = 0, Lo = 0, So = 0;
            var ks = qo + 18261.5 + Fo / 1440;
            j = (4.523602 - .00092422029 * ks) % t.twoPi, f = Math.sin(j), u = Math.cos(j), S = .91375164 - .03568096 * u, A = Math.sqrt(1 - S * S), O = .089683511 * f / A, T = Math.sqrt(1 - O * O);
            var Fs = 5.8351514 + .001944368 * ks;
            Z = .39785416 * f / A, C = T * u + .91744867 * O * f, Z = Math.atan2(Z, C), Z = Fs + Z - j, F = Math.cos(Z), R = Math.sin(Z), P = fs, k = gs, D = us, L = ls, E = vs, I = zs, l = ms, q = 1 / xs;
            for (var Rs = 0; 2 > Rs;) Rs += 1, s = P * E + k * D * I, n = -k * E + P * D * I, d = -P * I + k * D * E, c = k * L, h = k * I + P * D * E, m = P * L, e = js * d + bs * c, i = js * h + bs * m, a = -bs * d + js * c, r = -bs * h + js * m, g = s * ws + e * ys, x = n * ws + i * ys, M = -s * ys + e * ws, z = -n * ys + i * ws, v = a * ys, y = r * ys, w = a * ws, b = r * ws, wo = 12 * g * g - 3 * M * M, bo = 24 * g * x - 6 * M * z, jo = 12 * x * x - 3 * z * z, lo = 3 * (s * s + e * e) + wo * qs, uo = 6 * (s * n + e * i) + bo * qs, fo = 3 * (n * n + i * i) + jo * qs, go = -6 * s * a + qs * (-24 * g * w - 6 * M * v), xo = -6 * (s * r + n * a) + qs * (-24 * (x * w + g * b) + -6 * (M * y + z * v)), Mo = -6 * n * r + qs * (-24 * x * b - 6 * z * y), zo = 6 * e * a + qs * (24 * g * v - 6 * M * w), vo = 6 * (i * a + e * r) + qs * (24 * (x * v + g * y) - 6 * (z * w + M * b)), yo = 6 * i * r + qs * (24 * x * y - 6 * z * b), lo = lo + lo + p * wo, uo = uo + uo + p * bo, fo = fo + fo + p * jo, ro = l * q, ao = -.5 * ro / Ps, co = ro * Ps, io = -15 * Ms * co, ho = g * M + x * z, mo = x * M + g * z, po = x * z - g * M, 1 === Rs && (G = io, J = ao, N = ro, Q = co, $ = ho, _ = mo, B = po, H = lo, K = uo, U = fo, V = go, W = xo, X = Mo, Y = zo, to = vo, oo = yo, so = wo, eo = bo, no = jo, P = F, k = R, D = S, L = A, E = T * vs + O * zs, I = zs * T - vs * O, l = ps);
            rs = (4.7199672 + .2299715 * ks - Fs) % t.twoPi, ds = (6.2565837 + .017201977 * ks) % t.twoPi, Co = 2 * G * _, Go = 2 * G * B, Bo = 2 * J * W, Ho = 2 * J * (X - V), Ko = -2 * N * K, Uo = -2 * N * (U - H), Vo = -2 * N * (-21 - 9 * qs) * cs, Jo = 2 * Q * eo, No = 2 * Q * (no - so), Qo = -18 * Q * cs, $o = -2 * J * to, _o = -2 * J * (oo - Y), Oo = 2 * io * mo, To = 2 * io * po, ss = 2 * ao * xo, es = 2 * ao * (Mo - go), ns = -2 * ro * uo, is = -2 * ro * (fo - lo), as = -2 * ro * (-21 - 9 * qs) * hs, Wo = 2 * co * bo, Xo = 2 * co * (jo - wo), Yo = -18 * co * hs, ts = -2 * ao * vo, os = -2 * ao * (yo - zo);
            var Es = {
                snodm: zs,
                cnodm: vs,
                sinim: bs,
                cosim: js,
                sinomm: ys,
                cosomm: ws,
                day: ks,
                e3: To,
                ee2: Oo,
                em: Ms,
                emsq: qs,
                gam: Fs,
                peo: Do,
                pgho: Lo,
                pho: So,
                pinco: Ao,
                plo: Zo,
                rtemsq: Ps,
                se2: Co,
                se3: Go,
                sgh2: Jo,
                sgh3: No,
                sgh4: Qo,
                sh2: $o,
                sh3: _o,
                si2: Bo,
                si3: Ho,
                sl2: Ko,
                sl3: Uo,
                sl4: Vo,
                s1: io,
                s2: ao,
                s3: ro,
                s4: co,
                s5: ho,
                s6: mo,
                s7: po,
                ss1: G,
                ss2: J,
                ss3: N,
                ss4: Q,
                ss5: $,
                ss6: _,
                ss7: B,
                sz1: H,
                sz2: K,
                sz3: U,
                sz11: V,
                sz12: W,
                sz13: X,
                sz21: Y,
                sz22: to,
                sz23: oo,
                sz31: so,
                sz32: eo,
                sz33: no,
                xgh2: Wo,
                xgh3: Xo,
                xgh4: Yo,
                xh2: ts,
                xh3: os,
                xi2: ss,
                xi3: es,
                xl2: ns,
                xl3: is,
                xl4: as,
                nm: xs,
                z1: lo,
                z2: uo,
                z3: fo,
                z11: go,
                z12: xo,
                z13: Mo,
                z21: zo,
                z22: vo,
                z23: yo,
                z31: wo,
                z32: bo,
                z33: jo,
                zmol: rs,
                zmos: ds
            };
            return Es
        }
    }), s("dsinit", ["./constants"], function(t) {
        "use strict";
        return function(o) {
            var s, e, n, i, a, r, d, c, h, m, p, l, u, f, g, x, M, z, v, y, w, b, j, q, P, k, F, R, E, I, T, O, D, L = o.cosim,
                S = o.emsq,
                A = o.argpo,
                Z = o.s1,
                C = o.s2,
                G = o.s3,
                J = o.s4,
                N = o.s5,
                Q = o.sinim,
                $ = o.ss1,
                _ = o.ss2,
                B = o.ss3,
                H = o.ss4,
                K = o.ss5,
                U = o.sz1,
                V = o.sz3,
                W = o.sz11,
                X = o.sz13,
                Y = o.sz21,
                to = o.sz23,
                oo = o.sz31,
                so = o.sz33,
                eo = o.t,
                no = o.tc,
                io = o.gsto,
                ao = o.mo,
                ro = o.mdot,
                co = o.no,
                ho = o.nodeo,
                mo = o.nodedot,
                po = o.xpidot,
                lo = o.z1,
                uo = o.z3,
                fo = o.z11,
                go = o.z13,
                xo = o.z21,
                Mo = o.z23,
                zo = o.z31,
                vo = o.z33,
                yo = o.ecco,
                wo = o.eccsq,
                bo = o.em,
                jo = o.argpm,
                qo = o.inclm,
                Po = o.mm,
                ko = o.nm,
                Fo = o.nodem,
                Ro = o.irez,
                Eo = o.atime,
                Io = o.d2201,
                To = o.d2211,
                Oo = o.d3210,
                Do = o.d3222,
                Lo = o.d4410,
                So = o.d4422,
                Ao = o.d5220,
                Zo = o.d5232,
                Co = o.d5421,
                Go = o.d5433,
                Jo = o.dedt,
                No = o.didt,
                Qo = o.dmdt,
                $o = o.dnodt,
                _o = o.domdt,
                Bo = o.del1,
                Ho = o.del2,
                Ko = o.del3,
                Uo = o.xfact,
                Vo = o.xlamo,
                Wo = o.xli,
                Xo = o.xni,
                Yo = 17891679e-13,
                ts = 21460748e-13,
                os = 2.2123015e-7,
                ss = 17891679e-13,
                es = 7.3636953e-9,
                ns = 2.1765803e-9,
                is = .0043752690880113,
                as = 3.7393792e-7,
                rs = 1.1428639e-7,
                ds = 2 / 3,
                cs = .00015835218,
                hs = 119459e-10;
            Ro = 0, .0052359877 > (ko > .0034906585) && (Ro = 1), .00924 >= (ko >= .00826) && bo >= .5 && (Ro = 2);
            var ms = $ * hs * K,
                ps = _ * hs * (W + X),
                ls = -hs * B * (U + V - 14 - 6 * S),
                us = H * hs * (oo + so - 6),
                fs = -hs * _ * (Y + to);
            (.052359877 > qo || qo > t.pi - .052359877) && (fs = 0), 0 !== Q && (fs /= Q);
            var gs = us - L * fs;
            Jo = ms + Z * cs * N, No = ps + C * cs * (fo + go), Qo = ls - cs * G * (lo + uo - 14 - 6 * S);
            var xs = J * cs * (zo + vo - 6),
                Ms = -cs * C * (xo + Mo);
            (.052359877 > qo || qo > t.pi - .052359877) && (Ms = 0), _o = gs + xs, $o = fs, 0 !== Q && (_o -= L / Q * Ms, $o += Ms / Q);
            var zs = 0;
            if (R = (io + no * is) % t.twoPi, bo += Jo * eo, qo += No * eo, jo += _o * eo, Fo += $o * eo, Po += Qo * eo, 0 !== Ro) {
                if (T = Math.pow(ko / t.xke, ds), 2 === Ro) {
                    O = L * L;
                    var vs = bo;
                    bo = yo;
                    var ys = S;
                    S = wo, D = bo * S, f = -.306 - .44 * (bo - .64), .65 >= bo ? (g = 3.616 - 13.247 * bo + 16.29 * S, M = -19.302 + 117.39 * bo - 228.419 * S + 156.591 * D, z = -18.9068 + 109.7927 * bo - 214.6334 * S + 146.5816 * D, v = -41.122 + 242.694 * bo - 471.094 * S + 313.953 * D, y = -146.407 + 841.88 * bo - 1629.014 * S + 1083.435 * D, w = -532.114 + 3017.977 * bo - 5740.032 * S + 3708.276 * D) : (g = -72.099 + 331.819 * bo - 508.738 * S + 266.724 * D, M = -346.844 + 1582.851 * bo - 2415.925 * S + 1246.113 * D, z = -342.585 + 1554.908 * bo - 2366.899 * S + 1215.972 * D, v = -1052.797 + 4758.686 * bo - 7193.992 * S + 3651.957 * D, y = -3581.69 + 16178.11 * bo - 24462.77 * S + 12422.52 * D, w = bo > .715 ? -5149.66 + 29936.92 * bo - 54087.36 * S + 31324.56 * D : 1464.74 - 4664.75 * bo + 3763.64 * S), .7 > bo ? (q = -919.2277 + 4988.61 * bo - 9064.77 * S + 5542.21 * D, b = -822.71072 + 4568.6173 * bo - 8491.4146 * S + 5337.524 * D, j = -853.666 + 4690.25 * bo - 8624.77 * S + 5341.4 * D) : (q = -37995.78 + 161616.52 * bo - 229838.2 * S + 109377.94 * D, b = -51752.104 + 218913.95 * bo - 309468.16 * S + 146349.42 * D, j = -40023.88 + 170470.89 * bo - 242699.48 * S + 115605.82 * D), P = Q * Q, s = .75 * (1 + 2 * L + O), e = 1.5 * P, i = 1.875 * Q * (1 - 2 * L - 3 * O), a = -1.875 * Q * (1 + 2 * L - 3 * O), d = 35 * P * s, c = 39.375 * P * P, h = 9.84375 * Q * (P * (1 - 2 * L - 5 * O) + .33333333 * (-2 + 4 * L + 6 * O)), m = Q * (4.92187512 * P * (-2 - 4 * L + 10 * O) + 6.56250012 * (1 + 2 * L - 3 * O)), p = 29.53125 * Q * (2 - 8 * L + O * (-12 + 8 * L + 10 * O)), l = 29.53125 * Q * (-2 - 8 * L + O * (12 + 8 * L - 10 * O)), E = ko * ko, I = T * T, F = 3 * E * I, k = F * ss, Io = k * s * f, To = k * e * g, F *= T, k = F * as, Oo = k * i * M, Do = k * a * z, F *= T, k = 2 * F * es, Lo = k * d * v, So = k * c * y, F *= T, k = F * rs, Ao = k * h * w, Zo = k * m * j, k = 2 * F * ns, Co = k * p * b, Go = k * l * q, Vo = (ao + ho + ho - R - R) % t.twoPi, Uo = ro + Qo + 2 * (mo + $o - is) - co, bo = vs, S = ys
                }
                1 === Ro && (u = 1 + S * (-2.5 + .8125 * S), M = 1 + 2 * S, x = 1 + S * (-6 + 6.60937 * S), s = .75 * (1 + L) * (1 + L), n = .9375 * Q * Q * (1 + 3 * L) - .75 * (1 + L), r = 1 + L, r = 1.875 * r * r * r, Bo = 3 * ko * ko * T * T, Ho = 2 * Bo * s * u * Yo, Ko = 3 * Bo * r * x * os * T, Bo = Bo * n * M * ts * T, Vo = (ao + ho + A - R) % t.twoPi, Uo = ro + po - is + Qo + _o + $o - co), Wo = Vo, Xo = co, Eo = 0, ko = co + zs
            }
            var ws = {
                em: bo,
                argpm: jo,
                inclm: qo,
                mm: Po,
                nm: ko,
                nodem: Fo,
                irez: Ro,
                atime: Eo,
                d2201: Io,
                d2211: To,
                d3210: Oo,
                d3222: Do,
                d4410: Lo,
                d4422: So,
                d5220: Ao,
                d5232: Zo,
                d5421: Co,
                d5433: Go,
                dedt: Jo,
                didt: No,
                dmdt: Qo,
                dndt: zs,
                dnodt: $o,
                domdt: _o,
                del1: Bo,
                del2: Ho,
                del3: Ko,
                xfact: Uo,
                xlamo: Vo,
                xli: Wo,
                xni: Xo
            };
            return ws
        }
    }), s("initl", ["./constants", "./gstime/gstime"], function(t, o) {
        "use strict";
        return function(s) {
            var e, n, i, a, r, d = s.ecco,
                c = s.epoch,
                h = s.inclo,
                m = s.no,
                p = s.method,
                l = s.opsmode,
                u = d * d,
                f = 1 - u,
                g = Math.sqrt(f),
                x = Math.cos(h),
                M = x * x;
            e = Math.pow(t.xke / m, t.x2o3), n = .75 * t.j2 * (3 * M - 1) / (g * f);
            var z = n / (e * e);
            i = e * (1 - z * z - z * (1 / 3 + 134 * z * z / 81)), z = n / (i * i), m /= 1 + z;
            var v = Math.pow(t.xke / m, t.x2o3),
                y = Math.sin(h);
            a = v * f;
            var w = 1 - 5 * M,
                b = -w - M - M,
                j = 1 / v,
                q = a * a,
                P = v * (1 - d);
            if (p = "n", "a" === l) {
                var k = c - 7305,
                    F = Math.floor(k + 1e-8),
                    R = k - F,
                    E = .017202791694070362,
                    I = 1.7321343856509375,
                    T = 5.075514194322695e-15,
                    O = E + t.twoPi;
                r = (I + E * F + O * R + k * k * T) % t.twoPi, 0 > r && (r += t.twoPi)
            } else r = o(c + 2433281.5);
            var D = {
                no: m,
                method: p,
                ainv: j,
                ao: v,
                con41: b,
                con42: w,
                cosio: x,
                cosio2: M,
                eccsq: u,
                omeosq: f,
                posq: q,
                rp: P,
                rteosq: g,
                sinio: y,
                gsto: r
            };
            return D
        }
    }), s("sgp4init", ["./constants", "./dpper", "./dscom", "./dsinit", "./initl", "./sgp4"], function(t, o, s, e, n, i) {
        "use strict";
        return function(a, r) {
            var d, c, h, m, p, l, u, f, g, x, M, z, v, y, w, b, j, q, P, k, F, R, E, I, T, O, D, L, S, A, Z, C, G, J, N, Q, $, _, B, H, K, U, V, W, X, Y, to, oo, so, eo, no, io, ao, ro, co, ho, mo, po, lo, uo, fo, go, xo, Mo, zo, vo, yo, wo, bo, jo, qo, Po, ko, Fo, Ro, Eo, Io, To = r.opsmode,
                Oo = r.satn,
                Do = r.epoch,
                Lo = r.xbstar,
                So = r.xecco,
                Ao = r.xargpo,
                Zo = r.xinclo,
                Co = r.xmo,
                Go = r.xno,
                Jo = r.xnodeo;
            go = 1.5e-12, a.isimp = 0, a.method = "n", a.aycof = 0, a.con41 = 0, a.cc1 = 0, a.cc4 = 0, a.cc5 = 0, a.d2 = 0, a.d3 = 0, a.d4 = 0, a.delmo = 0, a.eta = 0, a.argpdot = 0, a.omgcof = 0, a.sinmao = 0, a.t = 0, a.t2cof = 0, a.t3cof = 0, a.t4cof = 0, a.t5cof = 0, a.x1mth2 = 0, a.x7thm1 = 0, a.mdot = 0, a.nodedot = 0, a.xlcof = 0, a.xmcof = 0, a.nodecf = 0, a.irez = 0, a.d2201 = 0, a.d2211 = 0, a.d3210 = 0, a.d3222 = 0, a.d4410 = 0, a.d4422 = 0, a.d5220 = 0, a.d5232 = 0, a.d5421 = 0, a.d5433 = 0, a.dedt = 0, a.del1 = 0, a.del2 = 0, a.del3 = 0, a.didt = 0, a.dmdt = 0, a.dnodt = 0, a.domdt = 0, a.e3 = 0, a.ee2 = 0, a.peo = 0, a.pgho = 0, a.pho = 0, a.pinco = 0, a.plo = 0, a.se2 = 0, a.se3 = 0, a.sgh2 = 0, a.sgh3 = 0, a.sgh4 = 0, a.sh2 = 0, a.sh3 = 0, a.si2 = 0, a.si3 = 0, a.sl2 = 0, a.sl3 = 0, a.sl4 = 0, a.gsto = 0, a.xfact = 0, a.xgh2 = 0, a.xgh3 = 0, a.xgh4 = 0, a.xh2 = 0, a.xh3 = 0, a.xi2 = 0, a.xi3 = 0, a.xl2 = 0, a.xl3 = 0, a.xl4 = 0, a.xlamo = 0, a.zmol = 0, a.zmos = 0, a.atime = 0, a.xli = 0, a.xni = 0, a.bstar = Lo, a.ecco = So, a.argpo = Ao, a.inclo = Zo, a.mo = Co, a.no = Go, a.nodeo = Jo, a.operationmode = To;
            var No = 78 / t.earthRadius + 1,
                Qo = 42 / t.earthRadius,
                $o = Qo * Qo * Qo * Qo,
                _o = 2 / 3;
            a.init = "y", a.t = 0;
            var Bo = {
                    satn: Oo,
                    ecco: a.ecco,
                    epoch: Do,
                    inclo: a.inclo,
                    no: a.no,
                    method: a.method,
                    opsmode: a.operationmode
                },
                Ho = n(Bo);
            a.no = Ho.no;
            var Ko = Ho.ao;
            a.con41 = Ho.con41;
            var Uo = Ho.con42,
                Vo = Ho.cosio,
                Wo = Ho.cosio2,
                Xo = Ho.eccsq,
                Yo = Ho.omeosq,
                ts = Ho.posq,
                os = Ho.rp,
                ss = Ho.rteosq,
                es = Ho.sinio;
            if (a.gsto = Ho.gsto, a.error = 0, Yo >= 0 || a.no >= 0) {
                if (a.isimp = 0, os < 220 / t.earthRadius + 1 && (a.isimp = 1), $ = No, L = $o, T = (os - 1) * t.earthRadius, 156 > T) {
                    $ = T - 78, 98 > T && ($ = 20);
                    var ns = (120 - $) / t.earthRadius;
                    L = ns * ns * ns * ns, $ = $ / t.earthRadius + 1
                }
                O = 1 / ts, xo = 1 / (Ko - $), a.eta = Ko * a.ecco * xo, q = a.eta * a.eta, j = a.ecco * a.eta, D = Math.abs(1 - q), x = L * Math.pow(xo, 4), M = x / Math.pow(D, 3.5), f = M * a.no * (Ko * (1 + 1.5 * q + j * (4 + q)) + .375 * t.j2 * xo / D * a.con41 * (8 + 3 * q * (8 + q))), a.cc1 = a.bstar * f, g = 0, a.ecco > 1e-4 && (g = -2 * x * xo * t.j3oj2 * a.no * es / a.ecco), a.x1mth2 = 1 - Wo, a.cc4 = 2 * a.no * M * Ko * Yo * (a.eta * (2 + .5 * q) + a.ecco * (.5 + 2 * q) - t.j2 * xo / (Ko * D) * (-3 * a.con41 * (1 - 2 * j + q * (1.5 - .5 * j)) + .75 * a.x1mth2 * (2 * q - j * (1 + q)) * Math.cos(2 * a.argpo))), a.cc5 = 2 * M * Ko * Yo * (1 + 2.75 * (q + j) + j * q), z = Wo * Wo, lo = 1.5 * t.j2 * O * a.no, uo = .5 * lo * t.j2 * O, fo = -.46875 * t.j4 * O * O * a.no, a.mdot = a.no + .5 * lo * ss * a.con41 + .0625 * uo * ss * (13 - 78 * Wo + 137 * z), a.argpdot = -.5 * lo * Uo + .0625 * uo * (7 - 114 * Wo + 395 * z) + fo * (3 - 36 * Wo + 49 * z), zo = -lo * Vo, a.nodedot = zo + (.5 * uo * (4 - 19 * Wo) + 2 * fo * (3 - 7 * Wo)) * Vo, Mo = a.argpdot + a.nodedot, a.omgcof = a.bstar * g * Math.cos(a.argpo), a.xmcof = 0, a.ecco > 1e-4 && (a.xmcof = -_o * x * a.bstar / j), a.nodecf = 3.5 * Yo * zo * a.cc1, a.t2cof = 1.5 * a.cc1, a.xlcof = Math.abs(Vo + 1) > 1.5e-12 ? -.25 * t.j3oj2 * es * (3 + 5 * Vo) / (1 + Vo) : -.25 * t.j3oj2 * es * (3 + 5 * Vo) / go, a.aycof = -.5 * t.j3oj2 * es;
                var is = 1 + a.eta * Math.cos(a.mo);
                if (a.delmo = is * is * is, a.sinmao = Math.sin(a.mo), a.x7thm1 = 7 * Wo - 1, 2 * t.pi / a.no >= 225) {
                    a.method = "d", a.isimp = 1, mo = 0, R = a.inclo;
                    var as = {
                            epoch: Do,
                            ep: a.ecco,
                            argpp: a.argpo,
                            tc: mo,
                            inclp: a.inclo,
                            nodep: a.nodeo,
                            np: a.no,
                            e3: a.e3,
                            ee2: a.ee2,
                            peo: a.peo,
                            pgho: a.pgho,
                            pho: a.pho,
                            pinco: a.pinco,
                            plo: a.plo,
                            se2: a.se2,
                            se3: a.se3,
                            sgh2: a.sgh2,
                            sgh3: a.sgh3,
                            sgh4: a.sgh4,
                            sh2: a.sh2,
                            sh3: a.sh3,
                            si2: a.si2,
                            si3: a.si3,
                            sl2: a.sl2,
                            sl3: a.sl3,
                            sl4: a.sl4,
                            xgh2: a.xgh2,
                            xgh3: a.xgh3,
                            xgh4: a.xgh4,
                            xh2: a.xh2,
                            xh3: a.xh3,
                            xi2: a.xi2,
                            xi3: a.xi3,
                            xl2: a.xl2,
                            xl3: a.xl3,
                            xl4: a.xl4,
                            zmol: a.zmol,
                            zmos: a.zmos
                        },
                        rs = s(as);
                    c = rs.snodm, d = rs.cnodm, m = rs.sinim, h = rs.cosim, l = rs.sinomm, p = rs.cosomm, v = rs.day, a.e3 = rs.e3, a.ee2 = rs.ee2, w = rs.em, b = rs.emsq, P = rs.gam, a.peo = rs.peo, a.pgho = rs.pgho, a.pho = rs.pho, a.pinco = rs.pinco, a.plo = rs.plo, S = rs.rtemsq, a.se2 = rs.se2, a.se3 = rs.se3, a.sgh2 = rs.sgh2, a.sgh3 = rs.sgh3, a.sgh4 = rs.sgh4, a.sh2 = rs.sh2, a.sh3 = rs.sh3, a.si2 = rs.si2, a.si3 = rs.si3, a.sl2 = rs.sl2, a.sl3 = rs.sl3, a.sl4 = rs.sl4, A = rs.s1, Z = rs.s2, C = rs.s3, G = rs.s4, J = rs.s5, N = rs.s6, Q = rs.s7, _ = rs.ss1, B = rs.ss2, H = rs.ss3, K = rs.ss4, U = rs.ss5, V = rs.ss6, W = rs.ss7, X = rs.sz1, Y = rs.sz2, to = rs.sz3, oo = rs.sz11, so = rs.sz12, eo = rs.sz13, no = rs.sz21, io = rs.sz22, ao = rs.sz23, ro = rs.sz31, co = rs.sz32, ho = rs.sz33, a.xgh2 = rs.xgh2, a.xgh3 = rs.xgh3, a.xgh4 = rs.xgh4, a.xh2 = rs.xh2, a.xh3 = rs.xh3, a.xi2 = rs.xi2, a.xi3 = rs.xi3, a.xl2 = rs.xl2, a.xl3 = rs.xl3, a.xl4 = rs.xl4, I = rs.nm, vo = rs.z1, yo = rs.z2, wo = rs.z3, bo = rs.z11, jo = rs.z12, qo = rs.z13, Po = rs.z21, ko = rs.z22, Fo = rs.z23, Ro = rs.z31, Eo = rs.z32, Io = rs.z33, a.zmol = rs.zmol, a.zmos = rs.zmos;
                    var ds = {
                            inclo: R,
                            init: a.init,
                            ep: a.ecco,
                            inclp: a.inclo,
                            nodep: a.nodeo,
                            argpp: a.argpo,
                            mp: a.mo,
                            opsmode: a.operationmode
                        },
                        cs = o(a, ds);
                    a.ecco = cs.ep, a.inclo = cs.inclp, a.nodeo = cs.nodep, a.argpo = cs.argpp, a.mo = cs.mp, k = 0, F = 0, E = 0;
                    var hs = {
                            cosim: h,
                            emsq: b,
                            argpo: a.argpo,
                            s1: A,
                            s2: Z,
                            s3: C,
                            s4: G,
                            s5: J,
                            sinim: m,
                            ss1: _,
                            ss2: B,
                            ss3: H,
                            ss4: K,
                            ss5: U,
                            sz1: X,
                            sz3: to,
                            sz11: oo,
                            sz13: eo,
                            sz21: no,
                            sz23: ao,
                            sz31: ro,
                            sz33: ho,
                            t: a.t,
                            tc: mo,
                            gsto: a.gsto,
                            mo: a.mo,
                            mdot: a.mdot,
                            no: a.no,
                            nodeo: a.nodeo,
                            nodedot: a.nodedot,
                            xpidot: Mo,
                            z1: vo,
                            z3: wo,
                            z11: bo,
                            z13: qo,
                            z21: Po,
                            z23: Fo,
                            z31: Ro,
                            z33: Io,
                            ecco: a.ecco,
                            eccsq: Xo,
                            em: w,
                            argpm: k,
                            inclm: R,
                            mm: E,
                            nm: I,
                            nodem: F,
                            irez: a.irez,
                            atime: a.atime,
                            d2201: a.d2201,
                            d2211: a.d2211,
                            d3210: a.d3210,
                            d3222: a.d3222,
                            d4410: a.d4410,
                            d4422: a.d4422,
                            d5220: a.d5220,
                            d5232: a.d5232,
                            d5421: a.d5421,
                            d5433: a.d5433,
                            dedt: a.dedt,
                            didt: a.didt,
                            dmdt: a.dmdt,
                            dnodt: a.dnodt,
                            domdt: a.domdt,
                            del1: a.del1,
                            del2: a.del2,
                            del3: a.del3,
                            xfact: a.xfact,
                            xlamo: a.xlamo,
                            xli: a.xli,
                            xni: a.xni
                        },
                        ms = e(hs);
                    w = ms.em, k = ms.argpm, R = ms.inclm, E = ms.mm, I = ms.nm, F = ms.nodem, a.irez = ms.irez, a.atime = ms.atime, a.d2201 = ms.d2201, a.d2211 = ms.d2211, a.d3210 = ms.d3210, a.d3222 = ms.d3222, a.d4410 = ms.d4410, a.d4422 = ms.d4422, a.d5220 = ms.d5220, a.d5232 = ms.d5232, a.d5421 = ms.d5421, a.d5433 = ms.d5433, a.dedt = ms.dedt, a.didt = ms.didt, a.dmdt = ms.dmdt, y = ms.dndt, a.dnodt = ms.dnodt, a.domdt = ms.domdt, a.del1 = ms.del1, a.del2 = ms.del2, a.del3 = ms.del3, a.xfact = ms.xfact, a.xlamo = ms.xlamo, a.xli = ms.xli, a.xni = ms.xni
                }
                1 !== a.isimp && (u = a.cc1 * a.cc1, a.d2 = 4 * Ko * xo * u, po = a.d2 * xo * a.cc1 / 3, a.d3 = (17 * Ko + $) * po, a.d4 = .5 * po * Ko * xo * (221 * Ko + 31 * $) * a.cc1, a.t3cof = a.d2 + 2 * u, a.t4cof = .25 * (3 * a.d3 + a.cc1 * (12 * a.d2 + 10 * u)), a.t5cof = .2 * (3 * a.d4 + 12 * a.cc1 * a.d3 + 6 * a.d2 * a.d2 + 15 * u * (2 * a.d2 + u)))
            }
            return i(a, 0), a.init = "n", !0
        }
    }), s("propagate/twoline2satrec", ["../constants", "../gstime/days2mdhms", "../gstime/jday", "../sgp4init"], function(t, o, s, e) {
        "use strict";
        return function(n, i) {
            var a = "i",
                r = 1440 / (2 * t.pi),
                d = 0,
                c = 0,
                h = 0,
                m = {};
            m.error = 0, m.satnum = n.substring(2, 7), m.epochyr = parseInt(n.substring(18, 20), 10), m.epochdays = parseFloat(n.substring(20, 32)), m.ndot = parseFloat(n.substring(33, 43)), m.nddot = parseFloat("." + parseInt(n.substring(44, 50), 10) + "E" + n.substring(50, 52)), m.bstar = parseFloat(n.substring(53, 54) + "." + parseInt(n.substring(54, 59), 10) + "E" + n.substring(59, 61)), c = parseInt(n.substring(64, 68), 10), m.inclo = parseFloat(i.substring(8, 16)), m.nodeo = parseFloat(i.substring(17, 25)), m.ecco = parseFloat("." + i.substring(26, 33)), m.argpo = parseFloat(i.substring(34, 42)), m.mo = parseFloat(i.substring(43, 51)), m.no = parseFloat(i.substring(52, 63)), d = parseFloat(i.substring(63, 68)), m.no = m.no / r, m.a = Math.pow(m.no * t.tumin, -2 / 3), m.ndot = m.ndot / (1440 * r), m.nddot = m.nddot / (1440 * r * 1440), m.inclo = m.inclo * t.deg2rad, m.nodeo = m.nodeo * t.deg2rad, m.argpo = m.argpo * t.deg2rad, m.mo = m.mo * t.deg2rad, m.alta = m.a * (1 + m.ecco) - 1, m.altp = m.a * (1 - m.ecco) - 1, h = m.epochyr < 57 ? m.epochyr + 2e3 : m.epochyr + 1900;
            var p = o(h, m.epochdays),
                l = p.mon,
                u = p.day,
                f = p.hr,
                g = p.minute,
                x = p.sec;
            m.jdsatepoch = s(h, l, u, f, g, x);
            var M = {
                opsmode: a,
                satn: m.satnum,
                epoch: m.jdsatepoch - 2433281.5,
                xbstar: m.bstar,
                xecco: m.ecco,
                xargpo: m.argpo,
                xinclo: m.inclo,
                xmo: m.mo,
                xno: m.no,
                xnodeo: m.nodeo
            };
            return e(m, M), m
        }
    }), s("satellite", ["./constants", "./coordinate-transforms/degrees-lat", "./coordinate-transforms/degrees-long", "./coordinate-transforms/ecf-to-eci", "./coordinate-transforms/ecf-to-look-angles", "./coordinate-transforms/eci-to-ecf", "./coordinate-transforms/eci-to-geodetic", "./coordinate-transforms/geodetic-to-ecf", "./coordinate-transforms/topocentric", "./coordinate-transforms/topocentric-to-look-angles", "./doppler-factor", "./gstime/days2mdhms", "./gstime/gstime", "./gstime/jday", "./propagate/propagate", "./propagate/twoline2satrec", "./sgp4"], function(t, o, s, e, n, i, a, r, d, c, h, m, p, l, u, f, g) {
        "use strict";
        return {
            version: "1.2.0",
            constants: t,
            degreesLat: o,
            degreesLong: s,
            eciToEcf: i,
            ecfToEci: e,
            eciToGeodetic: a,
            ecfToLookAngles: n,
            geodeticToEcf: r,
            dopplerFactor: h,
            gstimeFromJday: p,
            gstimeFromDate: function(t, o, s, e, n, i) {
                return p(l(t, o, s, e, n, i))
            },
            propagate: u,
            twoline2satrec: f,
            sgp4: g
        }
    }), o("satellite")
});