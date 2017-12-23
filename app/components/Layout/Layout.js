import LayoutStyle from './LayoutStyle';
import Header from '../Header/Header';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    {LayoutStyle()}
  </div>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;
