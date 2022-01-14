USE HowKteam
Go

SELECT *
FROM dbo.GIAOVIEN 


-- Tạo ra một bảng lưu thông tin giáo viên, tên bộ môn và lương của giáo viên đó
SELECT HOTEN, TENBM, LUONG INTO Luonggiaovien
FROM dbo.GIAOVIEN, dbo.BOMON
WHERE dbo.GIAOVIEN.MABM = dbo.BOMON.MABM 


UPDATE dbo.GIAOVIEN SET LUONG = 9
WHERE dbo.GIAOVIEN.MAGV = '005' 

-- View là bảng ảo
-- Cập nhật bảng mà View truy vấn tới
-- view được tạo từ 1 truy vấn

CREATE VIEW ANHHA AS
SELECT *
FROM dbo.GIAOVIEN 

SELECT *
FROM dbo.ANHHA

-- View có thể tạo có dấu và dấu cách

CREATE VIEW [Nguyễn Quang Hà] AS 
SELECT * FROM dbo.BOMON 

SELECT *
FROM [Nguyễn Quang Hà]
