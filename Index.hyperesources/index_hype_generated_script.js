//	HYPE.documents["Index"]
(function() {
    (function k() {
        function l(a, b, d) {
            var c=!1;
            null==window[a]&&(null==window[b]?(window[b]=[], window[b].push(k), a=document.getElementsByTagName("head")[0], b=document.createElement("script"), c=h, false==!0&&(c=""), b.type="text/javascript", b.src=c+"/"+d, a.appendChild(b)): window[b].push(k), c=!0);
            return c
        }
        var h="Index.hyperesources", c="Index", e="index_hype_container";
        if(false==!1)try {
            for(var f=document.getElementsByTagName("script"), a=0;
            a<f.length;
            a++) {
                var b=f[a].src;
                if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")) {
                    h=b.substr(0, b.lastIndexOf("/"));
                    break
                }
            }
        }
        catch(n) {}
        if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/), a=parseFloat(a&&a[1])||null, a=l("HYPE_526", "HYPE_dtl_526", !0==(null!=a&&10>a||false==!0)?"HYPE-526.full.min.js":"HYPE-526.thin.min.js"), false==!0&&(a=a||l("HYPE_w_526", "HYPE_wdtl_526", "HYPE-526.waypoints.min.js")), a))return;
        f=window.HYPE.documents;
        if(null!=f[c]) {
            b=1;
            a=c;
            do c=""+a+"-"+b++;
            while(null!=f[c]);
            for(var d=document.getElementsByTagName("div"), b=!1, a=0;
            a<d.length;
            a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")) {
                var b=1, g=e;
                do e=""+g+"-"+b++;
                while(null!=document.getElementById(e));
                d[a].id=e;
                b=!0;
                break
            }
            if(!1==b)return
        }
        b=[];
        b=[];
        d= {}
        ;
        g= {}
        ;
        for(a=0;
        a<b.length;
        a++)try {
            g[b[a].identifier]=b[a].name, d[b[a].name]=eval("(function(){return "+b[a].source+"})();")
        }
        catch(m) {
            window.console&&window.console.log(m), d[b[a].name]=function() {}
        }
        a=new HYPE_526(c, e, {
            "0": {
                p: 1, n: "Privacy.png", g: "5", o: true, t: "@1x"
            }
            , "1": {
                p: 1, n: "Privacy_2x.png", g: "5", o: true, t: "@2x"
            }
        }
        , h, [], d, [ {
            n: "Untitled Scene", o: "1", X: [0]
        }
        ], [ {
            o:"3", p:"600px", x:0, a:100, Z:400, cA:false, Y:600, b:100, c:"#FFFFFF", L:[], bY:1, d:600, U: {}
            , T: {
                kTimelineDefaultIdentifier: {
                    i: "kTimelineDefaultIdentifier", n: "Main Timeline", z: 0, b: [], a: [], f: 30
                }
            }
            , bZ:180, O:["22", "19", "18", "17", "20", "16", "15", "14", "21"], v: {
                "21": {
                    k: "div", x: "visible", c: 529, d: 384, z: 1, a: 18, j: "absolute", bS: 374, b: 0
                }
                , "16": {
                    aV: 8, w: "By: Mara Levy, Elizabeth Hamp, Grace Arnold and Yoni Nachmany&nbsp;", x: "visible", a: 34, Z: "break-word", b: 350, y: "preserve", j: "absolute", z: 3, yy: "nowrap", s: "Helvetica,Arial,Sans-Serif", aT: 8, k: "div", bF: "21", aS: 8, t: 16, aU: 8, G: "#000000", r: "inline"
                }
                , "19": {
                    b:98, z:3, K:"Solid", c:130, L:"Solid", d:35, aS:6, M:1, bD:"none", N:1, aT:6, O:1, g:"#F0F0F0", aU:6, P:1, bF:"20", aV:6, j:"absolute", aI:4, k:"div", aJ:4, aK:4, aL:4, A:"#A0A0A0", B:"#A0A0A0", Z:"break-word", r:"inline", C:"#A0A0A0", D:"#A0A0A0", t:13, F:"center", G:"#000000", aP:"pointer", w:"View our Read Me<br>", aB: {
                        a:[ {
                            p: 5, j: "\\ReadMe.html", k: false
                        }
                        ]
                    }
                    , x:"visible", I:"Solid", a:0, y:"preserve", J:"Solid"
                }
                , "14": {
                    h: "5", p: "no-repeat", x: "visible", a: 135, q: "100% 100%", b: 53, j: "absolute", bF: "21", c: 293, k: "div", z: 1, d: 293, r: "inline"
                }
                , "17": {
                    b:0, z:1, K:"Solid", c:130, L:"Solid", d:35, aS:6, M:1, bD:"none", N:1, aT:6, O:1, g:"#F0F0F0", aU:6, P:1, bF:"20", aV:6, j:"absolute", aI:4, k:"div", aJ:4, aK:4, aL:4, A:"#A0A0A0", B:"#A0A0A0", Z:"break-word", r:"inline", C:"#A0A0A0", D:"#A0A0A0", t:13, aA: {
                        a:[ {
                            p: 5, j: "\\Nets213Graph.html", k: false
                        }
                        ]
                    }
                    , F:"center", G:"#000000", aP:"pointer", w:"Privacy Policy Contents<br>", x:"visible", I:"Solid", a:0, y:"preserve", J:"Solid"
                }
                , "20": {
                    k: "div", x: "visible", c: 144, d: 147, z: 4, a: 0, j: "absolute", bF: "21", b: 126
                }
                , "15": {
                    G: "#000000", aU: 8, c: 404, aV: 8, d: 43, r: "inline", s: "Helvetica,Arial,Sans-Serif", t: 48, Z: "break-word", w: "DECODED", bF: "21", j: "absolute", x: "visible", k: "div", y: "preserve", z: 2, aS: 8, aT: 8, a: 72, F: "center", b: 0
                }
                , "18": {
                    b:49, z:2, K:"Solid", c:130, L:"Solid", d:35, aS:6, M:1, bD:"none", N:1, aT:6, O:1, g:"#F0F0F0", aU:6, P:1, bF:"20", aV:6, j:"absolute", aI:4, k:"div", aJ:4, aK:4, aL:4, A:"#A0A0A0", B:"#A0A0A0", Z:"break-word", r:"inline", C:"#A0A0A0", D:"#A0A0A0", t:13, aA: {
                        a:[ {
                            p: 5, j: "/qcgraphs.html", k: false
                        }
                        ]
                    }
                    , F:"center", G:"#000000", aP:"pointer", w:"Quality Control Results<br>", x:"visible", I:"Solid", a:0, y:"preserve", J:"Solid"
                }
                , "22": {
                    b:-49, z:2, K:"Solid", c:130, L:"Solid", d:35, aS:6, M:1, bD:"none", N:1, aT:6, O:1, g:"#F0F0F0", aU:6, P:1, bF:"20", aV:6, j:"absolute", aI:4, k:"div", aJ:4, aK:4, aL:4, A:"#A0A0A0", B:"#A0A0A0", Z:"break-word", r:"inline", C:"#A0A0A0", D:"#A0A0A0", t:13, aA: {
                        a:[ {
                            p: 5, j: "/finalscores.html", k: false
                        }
                        ]
                    }
                    , F:"center", G:"#000000", aP:"pointer", w:"Final Company Scores<br>", x:"visible", I:"Solid", a:0, y:"preserve", J:"Solid"
                }
            }
        }
        ], {}
        , g, {}
        , null, false, true, -1, true, true, false, true);
        f[c]=a.API;
        document.getElementById(e).setAttribute("HYP_dn", c);
        a.z_o(this.body)
    }
    )();
}

)();
