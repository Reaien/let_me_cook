import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <form action="" method="post">
        <input type="text" name="username" id="username" />
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <input type="confirmPassword" name="confirmPassword" />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
