n = int(input())
cnt = 0
for i in range(1, int(n**0.5)):
    if n % i == 0:
        cnt += 1

if n % int(n**0.5) == 0:
    print(cnt * 2 + 1)
else:
    print(cnt * 2)