export const copyright =
  "© 2022 Game Palace. Developed by Salman Moosa. IpsumCompany, SitAmmetGroup, CumSit and related logos are registered trademarks. All Rights Reserved.";
export const apikey = "63ec2507d2f945818e83088dc5c70968";
export const baseUrl = "https://api.rawg.io/api/";

export const loadScript = (file, id) => {
  if (document.getElementById(id) != undefined) {
    document.getElementById(id).remove();
  }
  const scriptFile = document.createElement("script");
  scriptFile.setAttribute("id", id);
  scriptFile.src = file;
  document.body.appendChild(scriptFile);
};
