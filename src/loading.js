export const loading = (loadingName, func) => {
  setTimeout(() => {
    loadingName.classList.add("hidden");
    func();
  }, 1000);
}; // 1초뒤에 로딩 hidden 처리
