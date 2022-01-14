-- Store procedure là chương trình hoặc là thủ tục
-- thủ tục kiểu như là 1 chỗ để lưu nhiều câu truy vấn, sau này gọi ra chạy
-- tái sử dụng các câu truy vấn
CREATE PROC USP_Test
@MaGV NVARCHAR(10), @LUONG INT
AS
BEGIN
	SELECT * 
	FROM dbo.GIAOVIEN 
	WHERE MAGV = @MaGV AND @LUONG = LUONG 
END
GO

-- có nhiều cách để truyền giá trị
EXEC dbo.USP_Test @MaGV = N'007', @LUONG = 2000
EXEC dbo.USP_Test N'007', 2000
EXECUTE dbo.USP_Test @MaGV = N'007', @LUONG = 2000
EXECUTE dbo.USP_Test N'007', 2000
GO

CREATE PROC USP_SelectAllGiaoVien
AS
BEGIN
SELECT *
FROM dbo.GIAOVIEN
END
GO













