USE SQLHAA
GO

SELECT *
FROM dbo.GiaoVien

SELECT SDT, TienLuong
FROM dbo.Hoso


-- Đổi tên cột
SELECT MaGV AS '1', TenSV AS N'Anh Hà đẹp trai', NgaySinh AS '3'
FROM dbo.GiaoVien