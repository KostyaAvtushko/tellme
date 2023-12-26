import Header from '../../default/Header/Header';
import './Init.scss';
import UserForm from './components/UserForm/UserForm';

function Init() {
    return (
        <>
            <Header />
            <div className="init-wrapper">
                <span className="greeting">Welcome!</span>
                <UserForm />
            </div>
        </>
    )
}

export default Init;