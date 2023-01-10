import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); //이전 페이지로 이동
  };
  const goArticles = () => {
    //articles 경로로 이동
    navigate("/articles", { replace: true });
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontsize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
