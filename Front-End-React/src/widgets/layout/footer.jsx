// Old Footer
// import PropTypes from "prop-types";
// import { Typography } from "@material-tailwind/react";
// import { HeartIcon } from "@heroicons/react/24/solid";

// export function Footer({ brandName, brandLink, routes }) {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="py-2">
//       <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
//         <Typography variant="small" className="font-normal text-inherit">
//           &copy; {year}, made with{" "}
//           <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5" /> by{" "}
//           <a
//             href={brandLink}
//             target="_blank"
//             className="transition-colors hover:text-blue-500"
//           >
//             {brandName}
//           </a>{" "}
//           for a better web.
//         </Typography>
//         <ul className="flex items-center gap-4">
//           {routes.map(({ name, path }) => (
//             <li key={name}>
//               <Typography
//                 as="a"
//                 href={path}
//                 target="_blank"
//                 variant="small"
//                 className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
//               >
//                 {name}
//               </Typography>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </footer>
//   );
// }

// Footer.defaultProps = {
//   brandName: "Creative Tim",
//   brandLink: "https://www.creative-tim.com",
//   routes: [
//     { name: "Creative Tim", path: "https://www.creative-tim.com" },
//     { name: "About Us", path: "https://www.creative-tim.com/presentation" },
//     { name: "Blog", path: "https://www.creative-tim.com/blog" },
//     { name: "License", path: "https://www.creative-tim.com/license" },
//   ],
// };

// Footer.propTypes = {
//   brandName: PropTypes.string,
//   brandLink: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object),
// };

// Footer.displayName = "/src/widgets/layout/footer.jsx";

// export default Footer;

// New Footer
import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center ">
          <div className="w-full px-4 lg:w-6/12 lg:text-left">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-4/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"
                    ripple={true}
                  >
                    <Typography color="white" variant="h4">
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12 lg:text-right">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Vox Analytix",
  description: "Inovative AI powered call center analytics.",
  socials: [
    {
      color: "black",
      name: "github",
      path: "https://github.com/AhmedKayani/VoxAnalytix",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "Home", path: "/welcome/landing-page" },
        { name: "Sign In", path: "/auth/sign-in" },
        {
          name: "Sign Up",
          path: "/auth/sign-up",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Vox Analytix by{" "}
      <a
        href="/welcome/landing-page"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        VA Team
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
