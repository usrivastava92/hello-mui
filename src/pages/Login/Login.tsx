import { Box, Grid, Link, Typography } from '@mui/material';

export const Login: React.FC = () => {
  return (
    <Box sx={{ px: { sm: 10 } }} className="container">
      <Grid container className="block xl:grid grid-cols-2 gap-4">
        <Box
          display="flex"
          height="100vh"
          sx={{ flexDirection: 'column', border: 2, justifyContent: 'center' }}
          className="xl:flex flex-col min-h-screen"
        >
          <Link
            sx={{
              justifyContent: 'center',
              display: 'flex',
              pt: 2,
              alignItems: 'center'
            }}
            className="-intro-x"
            href=""
          >
            <img
              alt="Localstack UI"
              style={{ height: '3rem', width: '3rem' }}
              src="src/assets/images/logo.png"
            />
            <Typography
              color="white"
              variant="h4"
              fontWeight="bold"
              sx={{ ml: 3 }}
            >
              Localstack
            </Typography>
          </Link>
          <div className="my-auto">
            <img
              alt="Localstack UI"
              className="-intro-x w-1/2 -mt-16"
              src="src/assets/images/illustration.svg"
            />
            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
              A few more clicks to
              <br />
              sign in to your account.
            </div>
            <div className="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </Box>
        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
              Sign In
            </h2>
            <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div>
            <div className="intro-x mt-8">
              <input
                className="intro-x login__input input input--lg border border-gray-300 block"
                placeholder="Email"
                type="text"
              />
              <input
                className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
              <div className="flex items-center mr-auto">
                <input
                  className="input border mr-2"
                  id="remember-me"
                  type="checkbox"
                />
                <label
                  className="cursor-pointer select-none"
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
              <a href="">Forgot Password?</a>
            </div>
            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              {/*size="lg" width="lg"*/}
              <button className="w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top">
                Login
              </button>
              <button>
                {/*[bordered]="true" className="w-full xl:w-32 text-gray-700 border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top" size="lg" width="lg"*/}
                Sign up
              </button>
            </div>
            <div className="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">
              By signin up, you agree to our
              <br />
              <a className="text-theme-1 dark:text-theme-10" href="">
                Terms and Conditions
              </a>{' '}
              &amp;{' '}
              <a className="text-theme-1 dark:text-theme-10" href="">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </Grid>
    </Box>
  );
};
