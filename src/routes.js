import PaginaPadrao from "componentes/paginaPadrao";
import Rodape from "componentes/rodape";
import ScrollToTop from "componentes/scrollToTop";
import NaoEncontrada from "paginas/naoEncontrada";
import Post from "paginas/post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
