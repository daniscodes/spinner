const spin = "|/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\||/-\|/-\|"
let x = 0;

for (let each of spin) {
  setTimeout(() => {
    process.stdout.write(each + '\r');
  }, x);
  x += 150
}