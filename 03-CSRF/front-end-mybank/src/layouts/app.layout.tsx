import React from "react";
import { useAuthContext } from "core/auth";
import { routes } from "core";
import footerImg from "core/content/img/logo_footer.svg";

export const AppLayout: React.FC = (props) => {
  const { children } = props;
  const { logout, user } = useAuthContext();
  const [isShow, setIsShow] = React.useState<boolean>(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="usuario">
            <p>Welcome Mr. {user.name}</p>
          </div>
          <div className="usuario">
            {!isShow && (
              <button className="avatar" onClick={() => setIsShow(true)}>
                {user.name.charAt(0)}
              </button>
            )}
            {isShow && (
              <nav>
                <ul className="navbar-nav">
                  <li>
                    <a>Change Email</a>
                    <a onClick={logout}>Logout</a>
                    <a onClick={() => setIsShow(false)}>&larr; Back</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
      {children}
      <footer id="footer">
        <div className="container">
          <img className="footer_logo" src={footerImg} alt="logo footer" />
        </div>
      </footer>
    </>
  );
};
