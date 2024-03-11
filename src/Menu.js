import { NavLink } from "react-router-dom";

export function Menu() {
    return(
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink 
                            to={route.to}
                            style={
                                ({isActive}) => ({color: isActive ? 'red' : 'blue'})
                                }
                            >
                            {route.text}
                        </NavLink>
                    </li>   
                ))}
                
            </ul>
        </nav>
    )
}

const routes = []
routes.push({
    to: '/',
    text: 'Home',
})
routes.push({
    to: '/blog',
    text: 'Blog',
})
routes.push({
    to: '/profile',
    text: 'Profile',
})