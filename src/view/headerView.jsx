import { BackgroundShaderView } from "./backgroundShaderView";

export function HeaderView(props) {
    return (
            <>
                <div className="header_container">
                    <nav>
                        <img src={import.meta.env.BASE_URL + props.info.logotype_url} className="logo" alt="Logo"/>
                        <ul>
                            <li><a href="#work">My Work</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header_text_box">
                    <img src={import.meta.env.BASE_URL + props.info.portrait_url} className="header_image" alt="Ioannis"/>
                    <div className="header_text">
                        <h1 className="heading-primary">
                            <span>{props.info.name}</span>
                        </h1>
                        <p>{props.info.professional_title}</p>
                    </div>
                </div>
            </>
    );
}