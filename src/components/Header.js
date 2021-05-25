
const Header = (props) => {

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager'
}

export default Header
