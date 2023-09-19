import React from "react";
import NavBar from "../../components/NavBar";
import './style.scss';

interface IBasePageProps {
  children: React.ReactNode;
}

const BasePage = ({ children }: IBasePageProps) => {

  return (
    <div>
      <NavBar />
      <div className="basepage-children">
        {children}
      </div>
    </div>
  )
}

export default BasePage;