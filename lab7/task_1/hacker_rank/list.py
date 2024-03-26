if __name__ == '__main__':
    N = int(input())
    arr = []
    for i in range(N):
        ss = input().split()
        if ss[0] == 'insert':
            arr.insert(int(ss[1]), int(ss[2]))
        elif ss[0] == 'print':
            print(arr)
        elif ss[0] == 'remove':
            arr.remove(int(ss[1]))
        elif ss[0] == 'append':
            arr.append(int(ss[1]))
        elif ss[0] == 'sort':
            arr.sort()
        elif ss[0] == 'reverse':
            arr.reverse()
        elif ss[0] == 'pop':
            arr.pop(len(arr) - 1)