USE HowKteam 
GO

-- Kiểm tra giáo viên mã 001 có phải là giáo viên quản lí chuyên môn hay không

SELECT *
FROM dbo.GIAOVIEN AS GV
WHERE GV.MAGV = N'001'

/* 001 tồn tại trong danh sách */

AND MAGV IN 
(
SELECT GVQLCM FROM dbo.GIAOVIEN 
) 


-- Truy vấn lồng trong FROM

SELECT * 
FROM dbo.GIAOVIEN, (SELECT * FROM dbo.DETAI) AS DT

-- Xuất ra danh sách giáo viên tham gia hơn 1 đề tài

SELECT *
FROM dbo.GIAOVIEN AS GV
WHERE 
(
SELECT COUNT(*) 
FROM dbo.THAMGIADT
WHERE MAGV = GV.MAGV  ) > 1 


--- Xuất ra thông tin giáo viên mà có 2 người thân

SELECT *
FROM dbo.GIAOVIEN AS GV
WHERE 
( 
SELECT COUNT(*)
FROM dbo.NGUOITHAN AS NT
WHERE NT.MAGV = GV.MAGV
) >1 

-- Xuất ra thông tin của khoa mà có nhiều hơn 2 giáo viên
