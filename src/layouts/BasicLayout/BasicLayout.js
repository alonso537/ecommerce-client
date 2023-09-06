import { Container } from "semantic-ui-react";
import classNames from 'classnames'
import styles from "./BasicLayout.module.scss";
import TopBar from "@/components/layout/topbar/TopBar";
import Footer from "@/components/layout/footer/Footer";

const BasicLayout = ({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,
}) => {
  return (
    <>
   
      {/* //TODO: Topbar */}
      <TopBar isOpenSearch={isOpenSearch} />

      <Container fluid>
        <div className={classNames({[styles.relative]: relative})}>

        {
            isContainer ? <Container>{children}</Container> : children
        }
        </div>
        </Container>

      {/* //TODO: Footer */}
      <Footer />
    </>
  );
};

export default BasicLayout;
