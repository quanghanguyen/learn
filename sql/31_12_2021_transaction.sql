USE HowKteam 
GO

SELECT * 
FROM dbo.GIAOVIEN
WHERE MAGV = '001'
-- Thêm 1 người vào bảng Giáo viên

INSERT dbo.GIAOVIEN (MAGV, HOTEN, LUONG, PHAI, NGSINH, DIACHI, GVQLCM, MABM)

VALUES (011, N'Nam', 2400, N'Nam', '19720101', N'108 Kiet 131', NULL, N'CNTT')
GO


BEGIN TRANSACTION
DELETE dbo.NGUOITHAN 
WHERE MAGV = '001'
ROLLBACK -- hủy bỏ transaction


BEGIN TRANSACTION
DELETE dbo.NGUOITHAN 
WHERE MAGV = '001'
COMMIT -- chấp nhận transaction

---------------------------------------------------------------------------------

-- đặt tên cho transaction
DECLARE @Trans NVARCHAR(10)
SELECT @Trans = 'Trans1'

BEGIN TRANSACTION @Trans
DELETE dbo.NGUOITHAN 
WHERE MAGV = '001'
COMMIT TRANSACTION @Trans







