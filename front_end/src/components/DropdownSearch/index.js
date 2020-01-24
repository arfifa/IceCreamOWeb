import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownSortBy = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown direction="down" group isOpen={dropdownOpen} size="sm" toggle={toggle}>
      <DropdownToggle caret>
        Sort by
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Nama Item A - Z</DropdownItem>
        <DropdownItem>Nama Item Z - A</DropdownItem>
        <DropdownItem>Rating Tertinggi</DropdownItem>
        <DropdownItem>Rating Terendah</DropdownItem>
        <DropdownItem>Harga Tertinggi</DropdownItem>
        <DropdownItem>Harga Terendah</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const DropdownSearchBy = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const searchBy = (id_search) => {
    props.searchBy(id_search)
  }

  return (
    <Dropdown direction="down" group isOpen={dropdownOpen} size="sm" toggle={toggle}>
      <DropdownToggle caret>
        Search by
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => searchBy(1)}>Nama</DropdownItem>
        <DropdownItem onClick={() => searchBy(2)}>Rating</DropdownItem>
        <DropdownItem onClick={() => searchBy(3)}>Harga</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export { DropdownSearchBy, DropdownSortBy };
