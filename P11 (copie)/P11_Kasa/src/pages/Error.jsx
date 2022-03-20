import '../styles/error.scss'
import {Link} from 'react-router-dom'

function Error404() {
  return (
    <div className="Error404">
      <div className="error_num">404</div>
      <div className="error_sub">Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/" className="back_link">Retourner sur la page d'accueil.</Link>
    </div>
  );
}

export default Error404;
