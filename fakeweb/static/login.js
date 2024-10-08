WRMCB = function(e) {
    var c = console;
    if (c && c.log && c.error) {
        c.log('Error running batched script.');
        c.error(e);
    }
}
;
try {
    /* module-key = 'confluence.web.resources:login', location = '/includes/js/login.js' */
    define("confluence/login", ["jquery", "ajs", "document"], function(a, c, e) {
        return function() {
            function g() {
                var d = a(".signup-section");
                0 !== d.length && (a(".login-section").hide(),
                d.show())
            }
            function h() {
                a(".login-section").show();
                a(".signup-section").hide()
            }
            a("#captcha-container .reload").click(function(d) {
                var b = +Math.random();
                a('input[name="captchaId"]').val(b);
                a(".captcha-image").attr("src", c.contextPath() + "/jcaptcha?id=" + b);
                a("#captcha-response").focus();
                d.stopPropagation();
                return !1
            });
            (-1 < e.URL.indexOf("login.action") || -1 < e.URL.indexOf("logout.action")) && h();
            -1 < e.URL.indexOf("signup.action") && g();
            a("#signupMessage").delegate("click", "a", function(a) {
                a.preventDefault();
                g()
            });
            a("#loginMessage").delegate("click", "a", function(a) {
                a.preventDefault();
                h()
            });
            var i = a(c.template('<div id="os_{field}_error" class="error" style="display:none"><span class="error">{message}</span></div>').fill({
                field: "username",
                message: "\uc0ac\uc6a9\uc790\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694."
            }).toString())
              , j = a(c.template('<div id="os_{field}_error" class="error" style="display:none"><span class="error">{message}</span></div>').fill({
                field: "password",
                message: "\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."
            }).toString())
              , k = a("#os_username")
              , l = a("#os_password")
              , f = a("#loginButton");
            f.closest("form").submit(function(a) {
                f.attr("enabled", "false");
                var b;
                b = !0;
                1 > k.val().length ? (b = !1,
                k.after(i.show())) : i.hide();
                1 > l.val().length ? (b = !1,
                l.after(j.show())) : j.hide();
                b || f.attr("enabled", "true");
                b || a.preventDefault()
            })
        }
    });
    require("confluence/module-exporter").safeRequire("confluence/login", function(a) {
        require("ajs").toInit(a)
    });
} catch (e) {
    WRMCB(e)
}
;