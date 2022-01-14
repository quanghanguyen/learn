USE HowKteam 
GO


SELECT * FROM dbo.GIAOVIEN

-- 1/ Xuất ra thông tin giáo viên và giáo viên quản lí chủ nhiệm của người đó

SELECT GV1.HOTEN, GV2.HOTEN FROM dbo.GIAOVIEN AS GV1, dbo.GIAOVIEN AS GV2
WHERE GV1.MAGV  = GV2.GVQLCM

-- 2/ Xuất ra số lượng giáo viên khoa CNTT

SELECT COUNT(*)
FROM dbo.GIAOVIEN AS GV, dbo.BOMON AS BM, dbo.KHOA AS K
WHERE GV.MABM = BM.MABM 
AND BM.MAKHOA = K.MAKHOA 
AND K.MAKHOA = N'CNTT'


-- 3/ Xuất ra thông tin và đề tài người đó tham gia khi kết quả là Đạt

SELECT *
FROM GIAOVIEN AS GV, THAMGIADT AS TG
WHERE GV.MAGV = TG.MAGV
AND TG.KETQUA = N'Đạt'



--- Xuất ra thông tin giáo viên có chữ H đầu tiền

SELECT *
FROM dbo.GIAOVIEN AS GV
WHERE GV.HOTEN LIKE N'L%'

--- Xuất ra thông tin giáo viên có chữ N cuối cùng

SELECT *
FROM dbo.GIAOVIEN AS GV
WHERE GV.HOTEN LIKE N'%N'


--- Xuất ra thông tin giáo viên có tồn tại chữ N

SELECT *
FROM dbo.GIAOVIEN AS GV
WHERE GV.HOTEN LIKE N'%N'
