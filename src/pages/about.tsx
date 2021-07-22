import React from 'react';

import { Meta } from 'layout/Meta';
import { connect } from 'react-redux';
import { setCurrentUser } from 'redux/actions/user.action';
import { RootState } from 'redux/store';
import { Main } from 'templates/Main';

interface Props {
  currentUser: string;
  setCurrentUser(arg0: string): {};
}

const About = ({ currentUser, setCurrentUser }: Props): JSX.Element => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1>{currentUser}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem.
      Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae
      autem esse explicabo molestias officia placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga recusandae quidem.
      Quaerat molestiae blanditiis doloremque possimus labore voluptatibus distinctio recusandae
      autem esse explicabo molestias officia placeat, accusamus aut saepe.
    </p>
    <button type="button" onClick={() => setCurrentUser('wawa')}>
      changeState
    </button>
  </Main>
);

const mapStateToProps = ({ user }: RootState) => user;

export default connect(mapStateToProps, { setCurrentUser })(About);
