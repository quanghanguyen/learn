
-- function l� ch?c n?ng (h�m)
-- c?ng gi?ng nh? th? t?c (g?i l� h�m), c?ng bao g?m code
-- n� gi?ng nh? m?t c�ng th?c, m?t c�i h�m ?� ???c t�nh s?n, ta nh?p d? li?u v� ra k?t qu?

USE HowKteam 
Go

CREATE FUNCTION Quant()
RETURNS TABLE 
AS RETURN 
SELECT * 
FROM dbo.GIAOVIEN 
GO

SELECT *
FROM Quant()




CREATE FUNCTION LuongGiaoVien1 (@MaGV CHAR(10))
RETURNS INT 
AS

BEGIN
	DECLARE @LUONG INT
	SELECT @LUONG = LUONG
	FROM dbo.GIAOVIEN 
	WHERE MAGV = @MaGV
	RETURN @LUONG
END

SELECT dbo.Luonggiaovien1('001')
FROM dbo.GIAOVIEN 
---------------------------------------------------------------------

-- t?o function t�nh s? truy?n v�o c� ph?i s? ch?n hay kh�ng

CREATE FUNCTION ODD(@NUM INT)
RETURNS NVARCHAR(10)
AS
BEGIN
	IF (@NUM % 2 = 0)
		RETURN N'S? ch?n'
	ELSE 
		RETURN N'S? l?'

	RETURN N'Nh?p l?i'

END

SELECT dbo.ODD(15)

-------------------------------------------------------
CREATE FUNCTION TINHTOAN(@NUM INT)
RETURNS NVARCHAR(10)
AS
BEGIN
	IF (@NUM % 2 = 0)
		RETURN N'Ch?n'
	ELSE
		RETURN N'L?'
	RETURN N'Nh?p l?i'

END

SELECT dbo.TINHTOAN(20)



