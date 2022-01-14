USE HowKteam 
GO


-- XUất ra danh sách tên bộ môn và số lượng giáo viên của bộ môn đó

SELECT TENBM, COUNT(*)
FROM dbo.BOMON, dbo.GIAOVIEN 
WHERE BOMON.MABM = GIAOVIEN.MABM 
GROUP BY TENBM 

-- Lấy ra Thông tin giáo viên có lương trung bình > lương trung bình của giáo viên
SELECT *
FROM dbo.GIAOVIEN 
WHERE GIAOVIEN.LUONG >
(SELECT SUM(LUONG) 
FROM dbo.GIAOVIEN AS GV)
/
(SELECT COUNT(MAGV)
FROM dbo.GIAOVIEN)    

-- Xuất ra tên giáo viên và số lượng đề tài giáo viên đó đã làm

SELECT GV.HOTEN, COUNT(*)
FROM dbo.GIAOVIEN AS GV, dbo.THAMGIADT AS TGDT
WHERE GV.MAGV = TGDT.MAGV 
GROUP BY GV.MAGV, GV.HOTEN
