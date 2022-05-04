import React, { useState } from 'react'
import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CForm, CFormInput, CButton } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand className="font-fam" href="#">
            My Port (Fo-lo) Land
          </CNavbarBrand>
          <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto mb-2 mb-lg-0">
              <CNavItem>
                <CNavLink className="font-fam" href="https://www.github.com">
                  Github
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="font-fam" href="#">
                  StackOverFlow
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className="font-fam" href="#">
                  LinkedIn
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
