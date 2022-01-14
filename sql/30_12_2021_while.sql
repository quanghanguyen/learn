USE HowKteam 
GO


-- Insert 1000 record vào bảng Bộ môn
-- mà không trùng ID, tên bộ môn tăng dần



-- Cấu trúc vòng lặp :   WHILE (Điều kiện thực hiện) --> Khối lệnh thực hiện
DECLARE @i INT = 1
DECLARE @a INT = 1
DECLARE @n INT = 1000
WHILE (@i < @n AND @a < @n)

BEGIN
INSERT dbo.HADEPTRAI (NAME, ADDRESS)
VALUES (@i, @a)
SET @i = @i +1
SET @a = @a +1 
END

SELECT * FROM dbo.HADEPTRAI

