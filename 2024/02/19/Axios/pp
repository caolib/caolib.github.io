#include <chrono>
#include <cstdlib>
#include <iomanip>
#include <sstream>

int main() {
  // 获取当前时间
  auto now = std::chrono::system_clock::now();
  std::time_t now_c = std::chrono::system_clock::to_time_t(now);
  std::tm *now_tm = std::localtime(&now_c);

  // 格式化时间
  std::stringstream ss;
  ss << std::put_time(now_tm, "%Y-%m-%d %H:%M:%S");

  // 执行git命令
  system("git add .");
  std::string commit_cmd = "git commit -m \"" + ss.str() + "\"";
  system(commit_cmd.c_str());
  system("git push");

  return 0;
}