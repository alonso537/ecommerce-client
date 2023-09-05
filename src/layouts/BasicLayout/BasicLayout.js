import { Container } from "semantic-ui-react";
import classNames from 'classnames'
import styles from "./BasicLayout.module.scss";

const BasicLayout = ({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,
}) => {
  return (
    <>
   
      {/* //TODO: Topbar */}

      <Container fluid>
        <div className={classNames({[styles.relative]: relative})}>

        {
            isContainer ? <Container>{children}</Container> : children
        }
        </div>
        </Container>

      {/* //TODO: Footer */}
    </>
  );
};

export default BasicLayout;
