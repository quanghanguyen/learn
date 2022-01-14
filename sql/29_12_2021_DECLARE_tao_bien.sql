USE HowKteam 
GO

-- In ra Mã giáo viên có lương cao nhất

SELECT MAGV 
FROM dbo.GIAOVIEN 
WHERE LUONG = ( SELECT MAX(LUONG) FROM dbo.GIAOVIEN )


-- Cách 1
-- Lấy ra tuổi của giáo viên mà có lương lớn nhất

SELECT ( YEAR(GETDATE()) - YEAR(NGSINH) ) AS N'Tuổi'
FROM dbo.GIAOVIEN
WHERE LUONG = ( SELECT MAX(LUONG) FROM dbo.GIAOVIEN )

-- Cách 2

--> Tạo ra 1 biến kiểu và lưu câu truy vấn vào

DECLARE @BIEN CHAR(10)

SELECT MAGV 
FROM dbo.GIAOVIEN 
WHERE LUONG = ( SELECT MAX(LUONG) FROM dbo.GIAOVIEN )

SELECT ( YEAR(GETDATE()) - YEAR(NGSINH) ) AS N'Tuổi'
FROM dbo.GIAOVIEN
WHERE LUONG = @BIEN



-- Khởi tạo với kiểu dữ liệu
DECLARE @QUANT INT

-- Khởi tạo với giá trị mặc định
DECLARE @HA NVARCHAR = N'Xin chào'

-- set dữ liệu cho biến

SET @HA = 1
SET @QUANT = @HA * 2

-- set thông qua SELECT

DECLARE @HIHI INT

SELECT MAX(LUONG) 
FROM dbo.GIAOVIEN 


DECLARE @HIHI INT
SELECT @HIHI = MAX(LUONG) 
FROM dbo.GIAOVIEN 



---------------------------------------------------------------------------------

/* 1/ Xuất ra số lượng người thân của giáo viên 001
      Lưu lại mã giáo viên 001
	  Xuất ra các số lượng người thân của giáo viên còn lại */


DECLARE @MAGV INT = '001'

SELECT COUNT(*)
FROM dbo.NGUOITHAN
WHERE MAGV = @MAGV

/* Xuất ra tên của giáo viên có lương thấp nhất */

DECLARE @LUONG INT
DECLARE @HOTEN NVARCHAR(100)

SELECT @LUONG = MIN(LUONG)
FROM dbo.GIAOVIEN

SELECT @HOTEN = HOTEN
FROM dbo.GIAOVIEN 
WHERE LUONG = @LUONG

PRINT @HOTEN























