import React, { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import { Platform } from "@/api/platform";
import Link from "next/link";
import { Button, Icon, Image, Input } from "semantic-ui-react";
import { map } from "lodash";
import classNames from "classnames";

const platformCtrl = new Platform();

const Menu = ({ isOpenSearch }) => {
  const [platforms, setPlatforms] = useState(null);
  const [showSearch, setShowSearch] = useState(false)

  const openCloseSearch = () => setShowSearch((prevState) => !prevState)

  useEffect(() => {
    (async () => {
      try {
        //TODO: peticion...
        const response = await platformCtrl.getAll();
        setPlatforms(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(platforms);

  return (
    <div className={styles.platforms}>
      {map(platforms?.data, (platform) => {
        return (
          <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
            <Image src={platform?.attributes.icon.data.attributes.url} />
            {platform?.attributes?.title}
          </Link>
        );
      })}

      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div className={classNames(styles.inputContainer, {
        [styles.active] : showSearch
      })}>
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
};

export default Menu;
