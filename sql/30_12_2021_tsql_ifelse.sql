-- DECLARE @ZO NVARCHAR(10) = N'012'


USE HowKteam 
GO

DECLARE @LuongTrungBinh INT
DECLARE @SoLuongGiaoVien INT

SELECT @SoLuongGiaoVien = COUNT(MAGV) 
FROM dbo.GIAOVIEN 

SELECT @LuongTrungBinh = SUM(LUONG)/ @SoLuongGiaoVien 
FROM dbo.GIAOVIEN


PRINT @LuongTrungBinh

DECLARE @LuongMaGV INT
DECLARE @MaGV NVARCHAR(10) =  N'006'

SELECT @LuongMaGV = LUONG
FROM dbo.GIAOVIEN
WHERE MAGV = @MaGV

-- N?u @LuongMaGV > @LuongTrungBinh
-- xu?t ra l?n h?n
-- ng??c l?i xu?t ra bé h?n

IF @LuongMaGV > @LuongTrungBinh 
PRINT N'L?n h?n'
ELSE
PRINT N'Nh? h?n'


-- VD2: Update l??ng c?a toàn b? giáo viên n?u l??ng nh?p vào cao h?n l??ng TB
-- Else ch? update l??ng c?a GV N?

DECLARE @LuongTrungBinh INT
DECLARE @SoLuongGiaoVien INT

SELECT @SoLuongGiaoVien = COUNT(MAGV) 
FROM dbo.GIAOVIEN 

SELECT @LuongTrungBinh = SUM(LUONG)/ @SoLuongGiaoVien 
FROM dbo.GIAOVIEN

DECLARE @Luong INT = 1500

IF @Luong > @LuongTrungBinh 

BEGIN
	UPDATE dbo.GIAOVIEN SET LUONG = @Luong 
END

ELSE

BEGIN
	UPDATE dbo.GIAOVIEN SET LUONG = @Luong
	WHERE PHAI = N'N?'
END
































