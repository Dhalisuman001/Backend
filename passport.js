const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "802552041914-g2c4mi2oljfu6v3p9li4j3aopj79e8ti.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";
const GITHUB_CLIENT_ID = "846188fcfa8b2fd500bd";
const GITHUB_CLIENT_SECRET = "fc10876cbb5311afc10ac338c880388cd4985811";

const Facebook_APP_ID = "5781544211937764";
const Facebook_APP_SECRET = "e29630e2a4951130f34488c8fe50dc16";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: Facebook_APP_ID,
      clientSecret: Facebook_APP_SECRET,
      callbackURL: "/auth/linkedin/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
