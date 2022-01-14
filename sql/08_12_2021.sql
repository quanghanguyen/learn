CREATE DATABASE SQLHAA
GO 

USE SQLHAA

CREATE TABLE GiaoVien
(
    MaGV VARCHAR(10),
	TenSV NVARCHAR(100)
)
GO

CREATE TABLE HocSinh
(
    MaHS VARCHAR(10),
	TenHS NVARCHAR(100)
	)
GO

DROP TABLE HocSinh
GO

ALTER TABLE GiaoVien ADD NgaySinh date
GO


