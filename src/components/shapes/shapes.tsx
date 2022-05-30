import "./shapes.css";

export function Shapes({ children }: any) {
    return (
        <div className="shapes">
            <h2>Figuras</h2>
            {children}
        </div>
    );
}
