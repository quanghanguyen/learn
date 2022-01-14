USE HowKteam 
GO


-- Xuất ra số lượng giáo viên trong từng bộ môn mà số lượng giáo viên > 2 
-- having là where như select nhưng dành cho group by


SELECT dbo.BOMON.MABM, COUNT(*) AS N'Số lượng'
FROM dbo.GIAOVIEN, dbo.BOMON
WHERE dbo.BOMON.MABM = dbo.GIAOVIEN.MABM 
--AND COUNT(*) >2 
GROUP BY dbo.BOMON.MABM
HAVING COUNT(*) >2

-- Xuất ra mức lương và tổng tuổi của GV nhận mức lương đó và có người thân
-- và tuổi phải lớn hơn tuổi trung bình
SELECT LUONG, 
SUM(YEAR(GETDATE()) - YEAR(GIAOVIEN.NGSINH)) AS N'Tổng tuổi'
FROM dbo.GIAOVIEN, dbo.NGUOITHAN 
WHERE dbo.GIAOVIEN.MAGV = dbo.NGUOITHAN.MAGV
AND GIAOVIEN.MAGV IN (SELECT MAGV FROM dbo.NGUOITHAN) 
GROUP BY LUONG, GIAOVIEN.NGSINH 
HAVING YEAR(GETDATE()) - YEAR(GIAOVIEN.NGSINH) >
(
(SELECT SUM(YEAR(GETDATE()) - YEAR(GIAOVIEN.NGSINH)) 
FROM dbo.GIAOVIEN) / (SELECT COUNT(*) FROM dbo.GIAOVIEN)
)

