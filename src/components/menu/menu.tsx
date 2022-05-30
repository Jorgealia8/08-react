import "./menu.css";

export function Menu(props: any) {
    return (
        <nav>
            <ul>
                {props.options.map((item: any) => (
                    <li key={item.label}>
                        <a href={item.path}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
