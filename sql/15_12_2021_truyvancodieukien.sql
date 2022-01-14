USE SQLHAA
GO

SELECT * FROM dbo.GiaoVien

-- LẤY RA GIÁO VIÊN NHỎ HƠN 25 TUỔI
SELECT * FROM dbo.GiaoVien
WHERE YEAR(GETDATE())  - YEAR(NgaySinh) > 25


SELECT COUNT(MaGV) AS N'Số lượng giáo viên' FROM dbo.GiaoVien 
