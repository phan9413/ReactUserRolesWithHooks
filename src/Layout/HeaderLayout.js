import Header from "../shared/Header";

const HeaderLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default HeaderLayout;
