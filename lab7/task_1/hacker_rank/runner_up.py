if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    max1 = max(list(arr))
    max2 = -101
    for i in arr:
        if i > max2 and i != max1:
            max2 = i
            
    print(max2)