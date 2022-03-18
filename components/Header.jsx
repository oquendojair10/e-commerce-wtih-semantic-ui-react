import Link from "next/link";
import { useState, useContext } from "react";

import { Icon, Label, Menu, Header, Item } from "semantic-ui-react";
import { CartContext } from "../context/cart.context";

export default function HeaderComponent() {
  const { items } = useContext(CartContext);
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (name) => setActiveItem(name);

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-content">
          <Link href="/">
            <a>
              <Header
                as="h2"
                icon="bicycle"
                color="grey"
                content="Shopping Bicycles"
              />
            </a>
          </Link>
          <Menu compact>
            <Link href="/">
              <Menu.Item
                name="home"
                // active={activeItem === "home"}
                // onClick={() => handleItemClick("home")}
              />
            </Link>
            <Menu.Menu position="right">
              <Link href="/cart">
                <Menu.Item>
                  <Icon name="shop" /> Cart
                  <Label color="teal" floating>
                    {items.length}
                  </Label>
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
      <style jsx>{`
        .header-wrapper {
          padding: 2em 0;
          margin: auto;
          max-width: 800px;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </header>
  );
}
