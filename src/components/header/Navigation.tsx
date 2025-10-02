import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface NavigationLink {
  id: number;
  name: string;
  path: string;
  children?: NavigationLink[];
}

interface Props {
  navigationLinks: NavigationLink[];
  logo1: string | StaticImageData;
}

const Navigation: React.FC<Props> = ({ navigationLinks, logo1 }) => {
  return (
    <>
      {/*Logo and company name*/}
      <Link href="/" className="box">
        <div className="logo">
          <Image src={logo1} alt="logo" />
        </div>

        <div className="text">
          <div>WAKEUP</div>
          <div>MONSTER</div>
        </div>
      </Link>

      {/* Navigation menu with Links */}
      <nav className="navbar">
        <ul className="menu">
          {navigationLinks.map((item) => (
            <li
              key={item.id}
              className={item.children ? "dropdown-menu-item" : ""}
            >
              <Link href={item.path}>
                {item.name}
                {item.children && <i className="las la-angle-down" />}
              </Link>

              {item.children && (
                <ul className="dropdown-list">
                  {item.children.map((child, index) => (
                    <li key={index}>
                      <Link href={child.path}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Header right info */}
      <div className="header-right-info">
        <a className="with-border" href="tel:+91 6260002320">
          +91 6260002320
        </a>
        <a href="mailto:hello@wakeupmonster.com">
          <i className="iconoir-mail-out" />
        </a>
      </div>
    </>
  );
};

export default Navigation;
