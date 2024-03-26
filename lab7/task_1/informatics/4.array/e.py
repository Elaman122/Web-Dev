n = int(input())
a = [int(i) for i in input().split()]

for i in range(1, n):
    if a[i] < 0 and a[i - 1] < 0:
        print('YES')
        exit()
    elif a[i] >= 0 and a[i - 1] >= 0:
        print('YES')
        exit()

print('NO')
